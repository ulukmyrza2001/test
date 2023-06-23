import Providers from '../components/Provieders/Provieders'
import './globals.css'

export const metadata = {
  title: 'Cheber',
  description: 'Welcome to the cheber'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
