
import fs from 'fs'
import path from 'path'
import Header from '../components/Header'
import { SUPPORTED_LANGS, SITE_ORIGIN } from '@/app/lib/site'
export async function generateMetadata({ params }){
  const { lang } = params
  const title = 'Pamporovo Bookings'
  const alternates = { languages: Object.fromEntries(SUPPORTED_LANGS.map(l=> [l, `${SITE_ORIGIN}/${l}`])) }
  return { title, alternates }
}
export default function LangLayout({ children, params }){
  const lang = params.lang
  const dict = JSON.parse(fs.readFileSync(path.join(process.cwd(),'app','i18n',`${lang}.json`),'utf-8'))
  return (
    <html lang={lang}>
      <body>
        <Header lang={lang} dict={dict} />
        <main className='container'>
          {children}
          <footer className='footer'>© Pamporovo Bookings</footer>
        </main>
      </body>
    </html>
  )
}
