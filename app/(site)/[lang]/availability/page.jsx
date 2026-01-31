
'use client'
import { useEffect, useMemo, useState } from 'react'

function toISO(d){ return d.toISOString().slice(0,10) }

export default function Availability(){
  const [data,setData] = useState({})
  const [studio,setStudio] = useState('the-view')
  const [sel,setSel] = useState([])

  useEffect(()=>{ fetch('/data/availability.json').then(r=>r.json()).then(setData) },[])

  const booked = useMemo(()=> new Set((data[studio]||[])),[data,studio])

  const today = new Date()
  const days = [...Array(42)].map((_,i)=>{
    const d = new Date(today.getFullYear(), today.getMonth(), 1)
    const startDay = d.getDay()||7
    d.setDate(1 - (startDay-1) + i)
    const iso = toISO(d)
    const disabled = d.getMonth()!==today.getMonth()
    const isBooked = booked.has(iso)
    const isSel = sel.includes(iso)
    return {d, iso, disabled, isBooked, isSel}
  })

  const toggle = (iso)=> setSel(s=> s.includes(iso)? s.filter(x=>x!==iso): [...s, iso])

  const sendInquiry = async ()=>{
    const payload = { studio, dates: sel }
    const res = await fetch('/.netlify/functions/inquiry', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) })
    const j = await res.json()
    alert(j.message || 'Sent')
    setSel([])
  }

  return (
    <div>
      <h2>Availability</h2>
      <p>
        <label>Studio: </label>
        <select value={studio} onChange={e=>setStudio(e.target.value)}>
          <option value='the-view'>The View</option>
          <option value='the-glade'>The Glade</option>
          <option value='divena'>Divena</option>
        </select>
        <button style={{marginLeft:12}} disabled={!sel.length} onClick={sendInquiry}>Send inquiry for selected dates</button>
      </p>
      <div style={{display:'grid',gridTemplateColumns:'repeat(7,1fr)',gap:6}}>
        {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(d=> <div key={d} style={{fontWeight:600}}>{d}</div>)}
        {days.map(({iso,d,disabled,isBooked,isSel})=> (
          <button key={iso} onClick={()=>!disabled && !isBooked && toggle(iso)}
            style={{padding:'10px 6px',borderRadius:8, border:'1px solid #cbd5e1', background: isBooked? '#fee2e2' : isSel? '#dcfce7' : disabled? '#f8fafc' : 'white', color: disabled? '#94a3b8':'#111827'}}>
            {d.getDate()}
          </button>
        ))}
      </div>
    </div>
  )
}
