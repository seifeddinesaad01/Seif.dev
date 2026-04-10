import "server-only";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

type SendEmailDetails = {
  name?: string;
  email?: string;
  engagement?: string;
  budget?: string;
  message?: string;
};

type SendEmailResult = {
  success: boolean;
  error?: string;
};

function escapeHtml(value: string = "") {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getSesClient() {
  const region = process.env.AWS_REGION_TEST;
  const accessKeyId = process.env.AWS_ACCESS_KEY_ID_TEST;
  const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY_TEST;

  if (!region || !accessKeyId || !secretAccessKey) {
    throw new Error(
      "Missing AWS environment variables: AWS_REGION_TEST, AWS_ACCESS_KEY_ID_TEST, AWS_SECRET_ACCESS_KEY_TEST"
    );
  }

  return new SESClient({
    region,
    credentials: {
      accessKeyId,
      secretAccessKey,
    },
  });
}

export const sendEmail = async (
  recipientEmail: string,
  details: SendEmailDetails
): Promise<SendEmailResult> => {
  try {
    if (!recipientEmail) {
      return { success: false, error: "Recipient email is required" };
    }

    const ses = getSesClient();

    const name = escapeHtml(details?.name ?? "");
    const email = escapeHtml(details?.email ?? "");
    const engagement = escapeHtml(details?.engagement ?? "");
    const budget = escapeHtml(details?.budget ?? "");
    const message = escapeHtml(details?.message ?? "");

    const emailTemplate = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>New Contact Request</title>
  </head>
  <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
      <tr>
        <td align="center" style="padding: 40px 0;">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);">
            <tr>
              <td style="padding: 40px 20px; text-align: center;">
                <h1 style="margin: 0;">Seif.Dev</h1>
              </td>
            </tr>
            <tr>
              <td style="padding: 20px 40px;">
                <h2 style="color: #333333; font-size: 24px; font-weight: 600; margin-bottom: 20px;">New Contact Form Submission</h2>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding: 8px 0;"><strong>Name:</strong></td>
                    <td style="padding: 8px 0;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0;"><strong>Email:</strong></td>
                    <td style="padding: 8px 0;">${email}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0;"><strong>Engagement:</strong></td>
                    <td style="padding: 8px 0;">${engagement}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0;"><strong>Budget:</strong></td>
                    <td style="padding: 8px 0;">${budget}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; vertical-align: top;"><strong>Message:</strong></td>
                    <td style="padding: 8px 0;">${message}</td>
                  </tr>
                </table>
                <p style="color: #999999; font-size: 14px; margin-top: 30px;">Submitted on: ${new Date().toLocaleString()}</p>
              </td>
            </tr>
            <tr>
              <td style="background-color: #f8f9fa; padding: 20px; text-align: center;">
                <p style="margin: 0; font-size: 14px; color: #999999;">
                  © ${new Date().getFullYear()} PictureSpark. All rights reserved.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`.trim();

    const command = new SendEmailCommand({
      Source: process.env.SES_FROM_EMAIL ?? `"PictureSpark" <do-not-reply@picturespark.app>`,
      Destination: {
        ToAddresses: [recipientEmail],
      },
      Message: {
        Subject: {
          Data: "Session Invitation",
        },
        Body: {
          Html: { Data: emailTemplate },
          Text: {
            Data: "You have been invited. Click the link to join:",
          },
        },
      },
    });

    await ses.send(command);
    return { success: true };
  } catch (error: any) {
    console.error("Email sending failed:", error);
    return { success: false, error: error?.message || "Failed to send email" };
  }
};