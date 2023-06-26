import './globals.css'
import { Metadata } from 'next'
import Providers from '../components/Provieders/Provieders'
import Natification from '../components/Natification/Natification'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'

export const metadata: Metadata = {
  title: 'Cheber',
  description: 'Welcome to the cheber'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <main className="main">
            <Header />
            <Natification>{children}</Natification>
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  )
}
