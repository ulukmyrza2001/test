'use client'

import { Container } from '@/src/styles/ContainerStyle/Container'
import AdminLayout from './layout'
import { Dashboard } from '@/src/components/Dashboard/Dashboard'

export default function Admin() {
  return (
    <AdminLayout>
      <Dashboard />
      <Container>Admin</Container>
    </AdminLayout>
  )
}
