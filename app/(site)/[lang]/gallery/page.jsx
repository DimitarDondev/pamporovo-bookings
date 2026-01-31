
import fs from 'fs'
import path from 'path'
export default function Gallery(){
  const data = JSON.parse(fs.readFileSync(path.join(process.cwd(),'data','studios.json'),'utf-8'))
  const images = Object.values(data).flatMap(s=> s.images||[])
  return (<div><h2>Gallery</h2><div className='gallery'>{images.map(src=> <img key={src} src={src} alt='img'/>)}</div></div>)
}
