
import fs from 'fs'
import path from 'path'
import StudioCard from '@/components/StudioCard'
export default function Studios({ params }){
  const { lang } = params
  const dict = JSON.parse(fs.readFileSync(path.join(process.cwd(),'app','i18n',`${lang}.json`),'utf-8'))
  const data = JSON.parse(fs.readFileSync(path.join(process.cwd(),'data','studios.json'),'utf-8'))
  const list = Object.values(data)
  return (
    <div>
      <h2>{dict.studios}</h2>
      <div className='grid'>
        {list.map(s=> <StudioCard key={s.id} studio={s} lang={lang} dict={dict} />)}
      </div>
    </div>
  )
}
