
exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ message:'Method Not Allowed' }) }
  }
  try{
    const data = JSON.parse(event.body||'{}')
    // here you could forward to email/CRM; for now we just echo
    return { statusCode: 200, body: JSON.stringify({ ok:true, message: `Inquiry received for ${data.studio} on ${ (data.dates||[]).join(', ') }` }) }
  }catch(e){
    return { statusCode: 400, body: JSON.stringify({ ok:false, message:'Bad request' }) }
  }
}
