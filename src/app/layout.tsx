import './globals.css'
import { Metadata } from 'next'
import Providers from '../components/Provieders/Provieders'
import Natification from '../components/Natification/Natification'
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'
import { NavBar } from '../components/Navbar/NavBar'

export const metadata: Metadata = {
  title: 'Cheber',
  description: 'Welcome to the cheber'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* <Natification>
          <main className="main">
            <Header />
            {children}
            <Footer />
          </main>
        </Natification> */}
        <Header />
        <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
