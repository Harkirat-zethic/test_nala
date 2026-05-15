import type { ContactFormData } from "../validations/contact-schema";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function buildPlainText({ name, email, phone, subject, message }: ContactFormData): string {
  return [
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    subject ? `Subject: ${subject}` : null,
    "",
    "Message:",
    message,
  ]
    .filter((line) => line !== null)
    .join("\n");
}

export function buildHtml({ name, email, phone, subject, message }: ContactFormData): string {
  return `
      <div style="font-family: 'Outfit', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #ffffff;">
        <div style="border-bottom: 3px solid #1867a5; padding-bottom: 16px; margin-bottom: 24px;">
          <h1 style="font-family: 'Outfit', Arial, sans-serif; color: #181a20; font-size: 24px; margin: 0;">
            New Contact Form Submission
          </h1>
        </div>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 12px; color: #61656e; font-size: 14px; width: 100px;">Name</td>
            <td style="padding: 8px 12px; color: #181a20; font-size: 14px;">${escapeHtml(name)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; color: #61656e; font-size: 14px;">Email</td>
            <td style="padding: 8px 12px; color: #181a20; font-size: 14px;">
              <a href="mailto:${escapeHtml(email)}" style="color: #1867a5;">${escapeHtml(email)}</a>
            </td>
          </tr>
          ${phone ? `
          <tr>
            <td style="padding: 8px 12px; color: #61656e; font-size: 14px;">Phone</td>
            <td style="padding: 8px 12px; color: #181a20; font-size: 14px;">${escapeHtml(phone)}</td>
          </tr>` : ""}
          ${subject ? `
          <tr>
            <td style="padding: 8px 12px; color: #61656e; font-size: 14px;">Subject</td>
            <td style="padding: 8px 12px; color: #181a20; font-size: 14px;">${escapeHtml(subject)}</td>
          </tr>` : ""}
        </table>
        <div style="margin-top: 24px; padding: 16px; background: #f7f7f7; border-radius: 6px;">
          <p style="color: #61656e; font-size: 12px; margin: 0 0 8px 0; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>
          <p style="color: #181a20; font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
        <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #e2e4e5;">
          <p style="color: #717171; font-size: 12px; margin: 0;">
            Sent via nalaproperties.com.au contact form
          </p>
        </div>
      </div>
    `;
}
