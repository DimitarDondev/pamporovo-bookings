import fs from 'fs'
import path from 'path'
export default function StudioPage({ params }){
  const { lang, id } = params
  const dataPath = path.join(process.cwd(),'data','studios.json')
  const data = JSON.parse(fs.readFileSync(dataPath,'utf-8'))
  const s = data[id]
  if(!s) return <div className='container'>Not found</div>
  return (
    <div className='container'>
      <h1>{s.name[lang] || s.name.en}</h1>
      <p>{s.description[lang] || s.description.en}</p>
    </div>
  )
}
