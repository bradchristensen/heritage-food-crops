import request from 'request';
import React from 'react';
import ReactDOM from 'infrastructure/react-dom';
import config from 'app/config';

var cert = '-----BEGIN CERTIFICATE-----\n' +
'MIICtDCCAZygAwIBAgIJAIFpToo101eOMA0GCSqGSIb3DQEBBQUAMBIxEDAOBgNV\n' +
'BAMTB3B1enpsZXMwHhcNMTQwNjIzMTczNDM3WhcNMjQwNjIwMTczNDM3WjASMRAw\n' +
'DgYDVQQDEwdwdXp6bGVzMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA\n' +
'lKdSBPfUj8lQTkNA2aIXg7qGoE7riwm/xHOoOiVc2htyiwrA0OVz+3M5lA3KhLbD\n' +
'9WemCPLzNwHPbLTDE0w3Yk1BMXlLdHHVLHTvHMG3jNQe7UxXB5B80d4R/nITih/4\n' +
'NVhz0q7nmR8jagMVpL5Qnay75rPA3haHOj5kuHg5VM5X6FEY2PwQVBlyITl2tmsA\n' +
'tvnMWcfijtaHApKKZBNbaKdw4rhSJQ74Lva143wbmR2rqu9qPkhjt0U1Op2e8Qev\n' +
'bKWpToPodaXDLAZhN2nw/Z+o/M7MBSl5XFD2gvX+Cyn7V9y3s2JPCIn29BXQF4CP\n' +
'oNEKVbMR6mK9m5rH7pWscwIDAQABow0wCzAJBgNVHRMEAjAAMA0GCSqGSIb3DQEB\n' +
'BQUAA4IBAQAtpT2crl7o+XEfTfJdaod++fgje9weaCJYmYCVleI4ANbfxg7LwYRb\n' +
'nx3E70/+ivJMbwzkisMXVpLmnqL1TB6lUys4bvsHoc3qeEaFn1t5XktWXxWOVQK6\n' +
'C2eG7wnCBKJZJLraT3fONsKdcFhXRBw0zUJpcZL7VEedi22GR68OypGXPRnu6huv\n' +
'rC+l4HAdgVJBe7Lygtnkx24kqmd50AVMEbIfBFRIeUeNODiKLsFxX5SLl4kwxVo5\n' +
'aY3vt1Bz8AMAr3FTI8NaYHBN+4Amoh+EceOoEN/pAJW2QUGZNKopFfj4AgcWGfyr\n' +
'wdA0PTNMSwwjP++1+QXKcEPuReqbAh7Q\n' +
'-----END CERTIFICATE-----';

export default {
    post (req, res) {
        var ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        var userAgent = req.headers['user-agent'];

        var bodyHtml = ReactDOM.renderToStaticMarkup(<div>
            <p>
                <span>From: {req.body.name} {'<' + req.body.email + '>'}</span><br />
                <span>Phone: {req.body.phone}</span><br />
                <span>Location: {req.body.location}</span>
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

        var bodyPlainText = 'From: ' + req.body.name + ' <' + req.body.email + '>\n' +
            'Phone: ' + req.body.phone + '\n' +
            'Location: ' + req.body.location + '\n\n' +
            req.body.message + '\n\n' +
            'IP Address: ' + ipAddress + '\n' +
            'Browser: ' + userAgent + '\n';

        request.post({
            uri: 'https://courier.kitemedia.net.nz/api.php',
            ca: cert,
            checkServerIdentity: () => undefined, // bypass host check because
            form: {
                data: JSON.stringify({
                    api_key: config.courierApiKey,
                    api_version: 1,
                    from_name: config.title,
                    reply_to_name: req.body.name,
                    reply_to_email: req.body.email,
                    subject: 'HFCRT Contact Form',
                    body_html: bodyHtml,
                    body_plain: bodyPlainText,
                    priority: 3,
                    to: [
                        [config.contactEmail, config.title]
                    ],
                    cc: null
                })
            }
        }, (error, response, body) => {
            if (!error) {
                body = JSON.parse(body);
                if (response && response.statusCode >= 200 && response.statusCode < 300 && body.success) {
                    res.status(204).send('No Content');
                } else {
                    console.error(body.error);
                    res.status(500).send('Internal Server Error');
                }
            } else {
                res.status(500).send('Internal Server Error');
            }
        });
    }
};
