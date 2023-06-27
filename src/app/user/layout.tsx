import '../globals.css'
import { Footer } from '../../components/Footer/Footer'
import { Metadata } from 'next'
import { UserHeader } from '@/src/components/Header/UserHeader/UserHeader'

export const metadata: Metadata = {
  title: 'Client',
  description: 'Welcome to the cheber'
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <UserHeader />
      <main className="main">{children}</main>
      <Footer />
    </>
  )
}
