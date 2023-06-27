import { Container } from '@/src/styles/ContainerStyle/Container'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Profile | Cheber'
}

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  return <Container>{children}</Container>
}
