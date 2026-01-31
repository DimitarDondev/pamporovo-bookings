
import fs from 'fs'
import path from 'path'
export default function StudioPage({ params }){
  const { lang, id } = params
  const dict = JSON.parse(fs.readFileSync(path.join(process.cwd(),'app','i18n',`${lang}.json`),'utf-8'))
  const data = JSON.parse(fs.readFileSync(path.join(process.cwd(),'data','studios.json'),'utf-8'))
  const s = data[id]
  if(!s) return <div>Not found</div>
  const mapSrc = `https://www.google.com/maps?q=${s.location.lat},${s.location.lng}&z=15&output=embed`
  return (
    <div>
      <h1>{s.name[lang] || s.name.en}</h1>
      <p>{s.description[lang] || s.description.en}</p>
      <div className='gallery'>
        {(s.images||[]).map((src)=> <img key={src} src={src} alt={s.name.en} />)}
      </div>
      <h3>{dict.map}</h3>
      <div style={{position:'relative',paddingBottom:'56.25%',height:0,overflow:'hidden',borderRadius:'12px'}}>
        <iframe src={mapSrc} style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',border:0}} loading='lazy' referrerPolicy='no-referrer-when-downgrade' />
      </div>
    </div>
  )
}
