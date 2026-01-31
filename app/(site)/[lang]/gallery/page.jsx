
import fs from 'fs'
import path from 'path'
import Image from 'next/image'
export default function Gallery(){
  const data = JSON.parse(fs.readFileSync(path.join(process.cwd(),'data','studios.json'),'utf-8'))
  const images = Object.values(data).flatMap(s=> s.images||[])
  return (<div><h2>Gallery</h2><div className='gallery'>{images.map(src=> <Image key={src} src={src} alt='img' width={600} height={400} style={{width:'100%',height:'auto'}}/>)}</div></div>)
}
