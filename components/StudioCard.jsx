import Link from 'next/link'
import Image from 'next/image'
export default function StudioCard({ studio, lang, dict }){
  const img = (studio.images||[])[0] || '/images/placeholder.jpg'
  return (
    <div className='card'>
      <Image src={img} alt={studio.name.en} width={480} height={320} style={{width:'100%',height:'auto'}} />
      <h3>{studio.name[lang] || studio.name.en}</h3>
      <p>{studio.beds} {dict.beds} <span className='badge'>{(studio.amenities||[]).join(', ')}</span></p>
      <Link href={`/${lang}/studios/${studio.slug}`}>{dict.view}</Link>
    </div>
  )
}
