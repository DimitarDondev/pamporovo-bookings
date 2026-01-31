import Link from 'next/link'
export default function StudioCard({ studio, lang, dict }){
  return (
    <div className="card">
      <h3>{studio.name[lang] || studio.name.en}</h3>
      <p>{studio.beds} {dict.beds}</p>
      <Link href={`/${lang}/studios/${studio.slug}`}>{dict.view}</Link>
    </div>
  )
}
