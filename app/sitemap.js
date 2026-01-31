
import fs from 'fs'
import path from 'path'
import { SUPPORTED_LANGS, SITE_ORIGIN } from './lib/site'
export default async function sitemap(){
  const urls = []
  const data = JSON.parse(fs.readFileSync(path.join(process.cwd(),'data','studios.json'),'utf-8'))
  for(const lang of SUPPORTED_LANGS){
    urls.push({ url: `${SITE_ORIGIN}/${lang}`})
    urls.push({ url: `${SITE_ORIGIN}/${lang}/studios`})
    urls.push({ url: `${SITE_ORIGIN}/${lang}/gallery`})
    urls.push({ url: `${SITE_ORIGIN}/${lang}/contact`})
    urls.push({ url: `${SITE_ORIGIN}/${lang}/availability`})
    for(const s of Object.values(data)){
      urls.push({ url: `${SITE_ORIGIN}/${lang}/studios/${s.slug}`})
    }
  }
  return urls
}
