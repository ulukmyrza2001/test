import './globals.css'
import { Metadata } from 'next'
import { Natification } from '../components/Natification/Natification'
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'

export const metadata: Metadata = {
  title: 'Cheber',
  description: 'Welcome to the cheber'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Natification>
          <Header />
          <main className="main">{children}</main>
          <Footer />
        </Natification>
      </body>
    </html>
  )
}
