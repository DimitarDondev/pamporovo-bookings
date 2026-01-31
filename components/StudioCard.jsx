import Link from 'next/link'
export default function StudioCard({ studio, lang }){
  return (
    <div className="card">
      <h3>{studio.name[lang] || studio.name.en}</h3>
      <p>{studio.beds} beds</p>
      <Link href={`/${lang}/studios/${studio.slug}`}>Details</Link>
    </div>
  )
}
