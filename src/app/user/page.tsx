'use client'

import ClientLayout from '@/src/app/user/layout'
import { Container } from '@/src/styles/ContainerStyle/Container'
import { NavBar } from '@/src/components/Navbar/NavBar'

export default function UserPage() {
  return (
    <ClientLayout>
      <NavBar />
      <Container>Cheber</Container>
    </ClientLayout>
  )
}
