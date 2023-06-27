import React from 'react'
import Admin from './admin/page'
import UserPage from './user/page'

export default function Home() {
  const role = 'USER'

  const roleComponents = {
    ADMIN: <Admin />,
    USER: <UserPage />
  }

  const component = roleComponents[role] || <UserPage />

  return component
}
