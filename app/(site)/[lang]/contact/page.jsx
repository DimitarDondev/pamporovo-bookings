
export default function Contact(){
  return (
    <div>
      <h2>Contact</h2>
      <form name='contact' method='POST' data-netlify='true'>
        <input type='hidden' name='form-name' value='contact'/>
        <input name='name' placeholder='Name' required /> <br/>
        <input name='email' type='email' placeholder='Email' required /> <br/>
        <textarea name='message' placeholder='Message' rows={6} required></textarea> <br/>
        <button type='submit'>Send</button>
      </form>
    </div>
  )
}
