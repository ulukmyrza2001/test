'use client'

import '../globals.css'
import { useRouter } from 'next/navigation'
import { Metadata } from 'next'
import { ProtectRoute } from '@/src/components/ProtectRoute'
import { useAppSelector } from '@/src/redux/store'
import { Dashboard } from '@/src/components/Dashboard/Dashboard'

export const metadata: Metadata = {
  title: 'Admin',
  description: 'Welcome to the cheber'
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const { role } = useAppSelector((state) => state.auth)

  return (
    <ProtectRoute role={role} router={router}>
      <main className="dasboard_admin">
        <Dashboard />
        {children}
      </main>
    </ProtectRoute>
  )
}
