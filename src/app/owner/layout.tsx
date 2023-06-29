'use client'

import '../globals.css'
import { useRouter } from 'next/navigation'
import { Metadata } from 'next'
import { ProtectRoute } from '@/src/components/ProtectRoute'

export const metadata: Metadata = {
  title: 'Владелец',
  description: 'Welcome to the cheber'
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  return (
    <ProtectRoute role="owner" router={router}>
      <main className="main">{children}</main>
    </ProtectRoute>
  )
}
