
'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const locales = ['bg','en','de','el','tr']

export default function Header({ lang, dict }){
  const pathname = usePathname()
  const pathParts = pathname.split('/')
  const rest = pathParts.slice(2).join('/')
  function changeLang(e){
    const l = e.target.value
    const dest = '/' + l + (rest ? '/' + rest : '')
    window.location.href = dest
  }
  return (
    <header className="header">
      <div className="container nav">
        <Link href={`/${lang}`}>{dict.title}</Link>
        <nav className="nav" style={{marginLeft:'auto'}}>
          <Link href={`/${lang}/studios`}>{dict.studios}</Link>
          <Link href={`/${lang}/gallery`}>{dict.gallery}</Link>
          <Link href={`/${lang}/contact`}>{dict.contact}</Link>
          <select aria-label={dict.language} onChange={changeLang} defaultValue={lang}>
            {locales.map(l=> <option key={l} value={l}>{l.toUpperCase()}</option>)}
          </select>
        </nav>
      </div>
    </header>
  )
}
