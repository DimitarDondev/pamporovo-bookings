
'use client'
import { useState } from 'react'
import { CONTACT } from '@/app/lib/site'
export default function Contact(){
  const [loading,setLoading] = useState(false)
  const submit = async (e)=>{
    e.preventDefault()
    setLoading(true)
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    const res = await fetch('/.netlify/functions/inquiry', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ type:'contact', ...payload }) })
    const j = await res.json()
    alert(j.message || 'Sent')
    setLoading(false)
    e.currentTarget.reset()
  }
  return (
    <div>
      <h2>Contact</h2>
      <p>Email: {CONTACT.email} · Phone: {CONTACT.phone}</p>
      <form onSubmit={submit}>
        <input name='name' placeholder='Name' required /> <br/>
        <input name='email' type='email' placeholder='Email' required /> <br/>
        <textarea name='message' placeholder='Message' rows={6} required></textarea> <br/>
        <button type='submit' disabled={loading}>{loading? 'Sending…':'Send'}</button>
      </form>
    </div>
  )
}
