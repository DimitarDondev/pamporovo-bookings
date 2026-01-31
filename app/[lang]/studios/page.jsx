import fs from 'fs'
import path from 'path'
import StudioCard from '@/components/StudioCard'
export default function Studios({ params }){
  const lang = params.lang
  const dataPath = path.join(process.cwd(),'data','studios.json')
  const data = JSON.parse(fs.readFileSync(dataPath,'utf-8'))
  const list = Object.values(data)
  return (
    <div className='container'>
      <h2>Studios</h2>
      <div className='grid'>
        {list.map(s=> <StudioCard key={s.id} studio={s} lang={lang} />)}
      </div>
    </div>
  )
}
