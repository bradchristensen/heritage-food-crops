import SparkPost from 'sparkpost';
import bodyParser from 'body-parser';
import { Router as routerConstructor } from 'express';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import config from '../../config';

const router = routerConstructor({ mergeParams: true, strict: true });

const parse = bodyParser.json();

router.post('/', parse, async (req, res) => {
    const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const userAgent = req.headers['user-agent'];

    const toRender = (
        <div>
            <p>
                From: {req.body.name} {`<${req.body.email}>`}<br />
                Phone: {req.body.phone}<br />
                Location: {req.body.location}
            </p>
            <p>{req.body.message}</p>
            <p>
                <small>
                    <em>
                        IP Address: {ipAddress}<br />
                        Browser: {userAgent}
                    </em>
                </small>
            </p>
        </div>
    );

    const bodyHtml = renderToStaticMarkup(toRender);

    const bodyPlainText = `From: ${req.body.name} <${req.body.email}>
Phone: ${req.body.phone}
Location: ${req.body.location}

${req.body.message}

IP Address: ${ipAddress}
Browser: ${userAgent}
`;

    const mailClient = new SparkPost(config.sparkpostApiKey);

    const message = {
        recipients: [
            {
                address: {
                    email: config.contactEmail,
                    name: config.title,
                },
            },
        ],
        content: {
            from: {
                email: config.outgoingEmail,
                name: config.title,
            },
            reply_to: `${req.body.name} <${req.body.email}>`,
            subject: 'HFCRT Contact Form',
            html: bodyHtml,
            text: bodyPlainText,
        },
    };

    try {
        await mailClient.transmissions.send(message);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
        return;
    }

    res.status(204).send('No Content');
});

export default router;
