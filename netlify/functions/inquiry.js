
exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ message:'Method Not Allowed' }) }
  }
  try{
    const data = JSON.parse(event.body||'{}')
    const provider = process.env.EMAIL_PROVIDER || 'sendgrid'
    const to = process.env.TO_EMAIL || process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'book@pamporovobookings.com'
    const from = process.env.FROM_EMAIL || 'no-reply@pamporovobookings.com'

    const subject = data.type === 'contact'
      ? `[Contact] ${data.name || ''}`
      : `[Inquiry] ${data.studio || ''} — ${ (data.dates||[]).join(', ') }`

    const text = JSON.stringify(data, null, 2)

    if (provider === 'sendgrid' && process.env.SENDGRID_API_KEY) {
      const resp = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          personalizations: [{ to: [{ email: to }] }],
          from: { email: from },
          subject,
          content: [{ type: 'text/plain', value: text }]
        })
      })
      if (!resp.ok) {
        const msg = await resp.text()
        return { statusCode: 502, body: JSON.stringify({ ok:false, message:'Email provider error', details: msg }) }
      }
      return { statusCode: 200, body: JSON.stringify({ ok:true, message:'Inquiry sent via SendGrid' }) }
    }

    // Fallback: no provider configured — dev mode echo
    return { statusCode: 200, body: JSON.stringify({ ok:true, message:'(DEV) Inquiry received', data }) }
  }catch(e){
    return { statusCode: 400, body: JSON.stringify({ ok:false, message:'Bad request' }) }
  }
}
