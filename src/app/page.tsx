'use client'

import React from 'react'
import Admin from './admin/page'
import UserPage from './user/page'
import SuperAdmin from './super-admin/page'
import Owner from './owner/page'
import { useAppSelector } from '../redux/store'

export default function Home() {
  const { role } = useAppSelector((state) => state.auth)

  switch (role) {
    case 'USER':
      return <UserPage />
    case 'SUPER_ADMIN':
      return <SuperAdmin />
    case 'OWNER':
      return <Owner />
    case 'ADMIN':
      return <Admin />
    default:
      ;<UserPage />
      break
  }

  return
}
