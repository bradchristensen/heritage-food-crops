import SparkPost from 'sparkpost';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import config from 'app/config';

export default {
    post(req, res) {
        const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        const userAgent = req.headers['user-agent'];

        const bodyHtml = ReactDOMServer.renderToStaticMarkup(<div>
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
        </div>);

        const bodyPlainText = `From: ${req.body.name} <${req.body.email}>
Phone: ${req.body.phone}
Location: ${req.body.location}

${req.body.message}

IP Address: ${ipAddress}
Browser: ${userAgent}
`;

        const mailClient = new SparkPost(config.sparkpostApiKey);
        mailClient.transmissions.send({
            transmissionBody: {
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
            },
        }, (err, mailClientResponse) => {
            if (!err) {
                res.status(204).send('No Content');
            } else {
                console.error(err);
                res.status(500).send('Internal Server Error');
            }
        });
    },
};
