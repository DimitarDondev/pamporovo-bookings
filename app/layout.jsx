import './styles.css'
export const metadata = { title: 'Pamporovo Bookings' }
export default function RootLayout({ children }){
  return (
    <html lang='bg'><body>{children}</body></html>
  )
}
