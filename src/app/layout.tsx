import './globals.css'
import { Metadata } from 'next'
import { ReduxProvider } from '../redux/provider'
import { Toaster } from 'react-hot-toast'

export const metadata: Metadata = {
  title: 'Cheber',
  description: 'Welcome to the cheber'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <Toaster position="top-center" reverseOrder={false} />
          {children}
        </ReduxProvider>
      </body>
    </html>
  )
}
