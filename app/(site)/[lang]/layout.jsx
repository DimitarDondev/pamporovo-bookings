
import fs from 'fs'
import path from 'path'
import Header from '../components/Header'

export default function LangLayout({ children, params }){
  const lang = params.lang
  const dictPath = path.join(process.cwd(),'app','i18n',`${lang}.json`)
  const dict = JSON.parse(fs.readFileSync(dictPath,'utf-8'))
  return (
    <>
      <Header lang={lang} dict={dict} />
      <div className='container'>
        {children}
        <footer className='footer'>© Pamporovo Bookings</footer>
      </div>
    </>
  )
}
