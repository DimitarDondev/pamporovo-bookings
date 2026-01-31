import fs from 'fs'
import path from 'path'
export default function LangHome({ params }){
  const lang = params.lang
  const dictPath = path.join(process.cwd(),'app','i18n',`${lang}.json`)
  const dict = JSON.parse(fs.readFileSync(dictPath,'utf-8'))
  return (
    <div className='container'>
      <h1>{dict.title}</h1>
      <p><a href={`/${lang}/studios`}>{dict.studios}</a> · <a href={`/${lang}/contact`}>{dict.contact}</a></p>
    </div>
  )
}
