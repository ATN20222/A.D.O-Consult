import { Resend } from 'resend'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { name, email, phone, subject, message, honeypot } = req.body || {}

    if (honeypot) {
      return res.status(400).json({ error: 'Bad request' })
    }
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    const resendApiKey = process.env.RESEND_API_KEY
    if (!resendApiKey) {
      return res.status(500).json({ error: 'Email service not configured' })
    }

    const resend = new Resend(resendApiKey)

    const html = generateEmailHTML({ name, email, phone, subject, message })

    await resend.emails.send({
      from: 'A.D.O CONSULT <onboarding@resend.dev>',
      to: ['info@ado-egy.com'],
      subject: `New Contact Form Submission: ${subject}`,
      reply_to: email,
      html,
    })

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('contact handler error', err)
    return res.status(500).json({ error: 'Failed to send message' })
  }
}

function escapeHtml(str) {
  if (typeof str !== 'string') return ''
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function generateEmailHTML({ name, email, phone, subject, message }) {
  const primary = '#0413b8'
  const secondary = '#b6232d'
  const accent = '#38bdf8'
  const text = '#0f172a'
  const muted = '#64748b'

  return `
  <div dir="ltr" lang="en" style="margin:0;padding:0;background:#F7F8FA;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;color:${text};">
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#F7F8FA;padding:24px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:640px;background:#ffffff;border-radius:16px;box-shadow:0 10px 24px rgba(16,24,40,0.08);overflow:hidden;border:1px solid rgba(40,44,73,0.06);">
            <tr>
              <td style="padding:0">
                <div style="height:6px;background: ${primary};"></div>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 24px 8px 24px">
                <div style="text-align:center;margin-bottom:16px;">
                  <h1 style="margin:0;color:${primary};font-size:24px;font-weight:700;">A.D.O CONSULT</h1>
                  <p style="margin:4px 0 0 0;color:${muted};font-size:14px;">Engineering Excellence & MEP Solutions</p>
                </div>
                <h2 style="margin:0 0 8px 0;color:${secondary};font-size:22px;">New Contact Form Submission</h2>
                <p style="margin:0;color:${muted};font-size:14px;">A new message has been received from your website contact form.</p>
              </td>
            </tr>
            <tr>
              <td style="padding:0 24px 8px 24px">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:separate;border-spacing:0 8px;">
                  <tr>
                    <td style="background:#F0F4FF;border:1px solid rgba(4,19,184,0.25);border-radius:12px;padding:12px 14px;"><strong style="color:${secondary};">Name:</strong> ${escapeHtml(name)}</td>
                  </tr>
                  <tr>
                    <td style="background:#F0F4FF;border:1px solid rgba(4,19,184,0.25);border-radius:12px;padding:12px 14px;"><strong style="color:${secondary};">Email:</strong> ${escapeHtml(email)}</td>
                  </tr>
                  ${phone ? `<tr><td style="background:#F0F4FF;border:1px solid rgba(4,19,184,0.25);border-radius:12px;padding:12px 14px;"><strong style="color:${secondary};">Phone:</strong> ${escapeHtml(phone)}</td></tr>` : ''}
                  <tr>
                    <td style="background:#FFFBF0;border:1px solid rgba(182,35,45,0.35);border-radius:12px;padding:12px 14px;"><strong style="color:${secondary};">Subject:</strong> ${escapeHtml(subject)}</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 24px 16px 24px">
                <div style="background:#ffffff;border:1px solid rgba(40,44,73,0.08);border-radius:12px;padding:16px;">
                  <div style="color:${secondary};font-weight:700;margin-bottom:8px;">Message</div>
                  <div style="color:${text};white-space:pre-wrap;line-height:1.8;">${escapeHtml(message)}</div>
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding:0 24px 24px 24px">
                <table role="presentation" cellpadding="0" cellspacing="0">
                  <tr>
                    <td>
                      <a href="mailto:${encodeURIComponent(email)}" style="display:inline-block;background:${primary};color:#fff;text-decoration:none;padding:12px 18px;border-radius:999px;font-weight:700;">Reply to Sender</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:14px 24px 20px 24px;background:#FAFAFB;border-top:1px solid rgba(16,24,40,0.06);">
                <p style="margin:0;font-size:12px;color:${muted};">Sent by A.D.O CONSULT Contact System | Building 7881, Street 9, Mokattam, Cairo, Egypt</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </div>`
}