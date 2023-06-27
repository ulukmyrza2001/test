import { Container } from '@/src/styles/ContainerStyle/Container'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Partner',
  description: 'Welcome to the Partner'
}

export default function PartnerLayout({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <h1>Partner</h1>
      <ul>
        <li>
          <Link href="/">Cheber</Link>
        </li>
        <li>
          <Link href="/partner">partner</Link>
        </li>
        <li>
          <Link href="/partner/registration">registration</Link>
        </li>
      </ul>
      {children}
    </Container>
  )
}
