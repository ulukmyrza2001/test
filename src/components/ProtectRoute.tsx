'use client'
// components/ProtectedRoute.tsx
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

// Define your roles and their corresponding routes
const rolePermissions: Record<string, string[]> = {
  user: ['/', '/profile'],
  admin: ['/admin'],
  super_admin: ['/super-admin'],
  owner: ['owner']
}

interface ProtectProps {
  children: React.ReactNode
  role: string
  router: any
}

export const ProtectRoute = ({ children, role, router }: ProtectProps) => {
  const allowedRoutes = rolePermissions[role]

  useEffect(() => {
    const { pathname } = router
    const isAllowed = allowedRoutes?.some((route) => pathname?.startsWith(route))

    if (!isAllowed) {
      router.push('/')
    }
  }, [router])

  return <>{children}</>
}
