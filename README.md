
# Pamporovo Bookings — Stage 6

Adds:
- Email inquiries via Netlify Functions (SendGrid provider or dev echo)
- Contact page posts to function
- Dynamic sitemap (app/sitemap.js) for all languages and studio pages
- next/image in cards/galleries
- Configurable contact info via env (NEXT_PUBLIC_CONTACT_EMAIL / PHONE)

## Netlify environment variables
- NODE_VERSION=20 (already in netlify.toml)
- EMAIL_PROVIDER=sendgrid
- SENDGRID_API_KEY=***
- TO_EMAIL=book@pamporovobookings.com
- FROM_EMAIL=no-reply@pamporovobookings.com
- NEXT_PUBLIC_CONTACT_EMAIL=book@pamporovobookings.com
- NEXT_PUBLIC_CONTACT_PHONE=+359-XXX-XXX-XXX

## Deploy
- Build command: npm run build
- Publish: .next (in UI)
- Functions dir: netlify/functions (in netlify.toml)

