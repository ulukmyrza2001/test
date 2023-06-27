import '../globals.css'
import { Container } from '@/src/styles/ContainerStyle/Container'
import { Metadata } from 'next'
import Link from 'next/link'
import { Footer } from '../../components/Footer/Footer'
import { PartnerHeader } from '@/src/components/Header/PartnerHeader/PartnerHeader'

export const metadata: Metadata = {
  title: 'Partner',
  description: 'Welcome to the cheber'
}

export default function PartnerLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PartnerHeader />
      <main className="main">{children}</main>
    </>
  )
}
