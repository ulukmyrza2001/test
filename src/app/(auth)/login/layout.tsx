import { Metadata } from 'next'
import { Container } from '@/src/styles/ContainerStyle/Container'

export const metadata: Metadata = {
  title: 'Login'
}

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return <Container>{children}</Container>
}
