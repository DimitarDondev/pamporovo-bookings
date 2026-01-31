export default function Contact({ params }){
  const { lang } = params
  return (
    <div className='container'>
      <h2>Contact</h2>
      <form action='mailto:book@pamporovobookings.com' method='post' encType='text/plain'>
        <input name='name' placeholder='Name' required />
        <br/>
        <input name='email' type='email' placeholder='Email' required />
        <br/>
        <textarea name='message' placeholder='Message' rows={6} required></textarea>
        <br/>
        <button type='submit'>Send</button>
      </form>
    </div>
  )
}
