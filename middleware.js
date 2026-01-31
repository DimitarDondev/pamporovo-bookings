import { NextResponse } from 'next/server'
const locales=['bg','en','de','el','tr']
export function middleware(req){const { pathname }=req.nextUrl;if(pathname==='/' ) return NextResponse.next();const seg=pathname.split('/')[1];if(!locales.includes(seg)){return NextResponse.redirect(new URL('/bg', req.url))}return NextResponse.next()}
