import './globals.css'
import { Metadata } from 'next'
import { Natification } from '../components/Natification/Natification'

export const metadata: Metadata = {
  title: 'Cheber',
  description: 'Welcome to the cheber'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Natification>{children}</Natification>
      </body>
    </html>
  )
}
