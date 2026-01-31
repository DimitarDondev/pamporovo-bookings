
import fs from 'fs'
import path from 'path'
import Header from '../components/Header'
export const metadata = {
  metadataBase: new URL('https://pamporovobookings.com'),
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
