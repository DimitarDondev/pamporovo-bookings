'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const locales=['bg','en','de','el','tr']
export default function Header({ lang, dict }){
  const pathname = usePathname()
  const parts = pathname.split('/')
  const rest = parts.slice(2).join('/')
  const onLang=(e)=>{const l=e.target.value;window.location.href='/' + l + (rest? '/' + rest:'')}
  return (
    <header className="header">
      <div className="container" style={{display:'flex',gap:12,alignItems:'center'}}>
        <Link href={`/${lang}`}>{dict.title}</Link>
        <nav style={{marginLeft:'auto',display:'flex',gap:12}}>
          <Link href={`/${lang}/studios`}>{dict.studios}</Link>
          <Link href={`/${lang}/availability`}>{dict.availability}</Link>
          <Link href={`/${lang}/gallery`}>{dict.gallery}</Link>
          <Link href={`/${lang}/contact`}>{dict.contact}</Link>
          <select aria-label={dict.language} onChange={onLang} defaultValue={lang}>
            {locales.map(l=> <option key={l} value={l}>{l.toUpperCase()}</option>)}
          </select>
        </nav>
      </div>
    </header>
  )
}
