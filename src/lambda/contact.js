import SparkPost from "sparkpost";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

export async function handler(event) {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  if (!process.env.SPARKPOST_API_KEY) {
    console.error("Sparkpost API key not defined");
    return {
      statusCode: 500,
      body: "SparkPost API key not defined"
    };
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch (err) {
    return {
      statusCode: 400,
      body: `Invalid body provided: ${err}`
    };
  }

  const ipAddress = event.requestContext
    ? event.requestContext.identity.sourceIp
    : undefined;
  const userAgent = event.headers["user-agent"];

  const toRender = (
    <div>
      <p>
        From: {body.name} {`<${body.email}>`}
        <br />
        Phone: {body.phone}
        <br />
        Location: {body.location}
      </p>
      <p>{body.message}</p>
      <p>
        <small>
          <em>
            IP Address: {ipAddress}
            <br />
            Browser: {userAgent}
          </em>
        </small>
      </p>
    </div>
  );

  const bodyHtml = renderToStaticMarkup(toRender);

  const bodyPlainText = `From: ${body.name} <${body.email}>
Phone: ${body.phone}
Location: ${body.location}

${body.message}

IP Address: ${ipAddress}
Browser: ${userAgent}
`;

  const mailClient = new SparkPost(process.env.SPARKPOST_API_KEY);

  const message = {
    recipients: [
      {
        address: {
          email: process.env.CONTACT_EMAIL,
          name: process.env.REACT_APP_SITE_TITLE
        }
      }
    ],
    content: {
      from: {
        email: process.env.OUTGOING_EMAIL,
        name: process.env.REACT_APP_SITE_TITLE
      },
      // eslint-disable-next-line camelcase
      reply_to: `${body.name} <${body.email}>`,
      subject: "HFCRT Contact Form",
      html: bodyHtml,
      text: bodyPlainText
    }
  };

  try {
    await mailClient.transmissions.send(message);
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: "Failed to send mail via SparkPost"
    };
  }

  return { statusCode: 204 };
}
