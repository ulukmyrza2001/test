'use client'

import ClientLayout from '@/src/app/user/layout'
import { Filterlayout } from '@/src/components/Filter/FilterLayout/FilterLayout'
import { InputNumberMask } from '@/src/components/UI/Inputs/InputMask/InputMask'
import { Container } from '@/src/styles/ContainerStyle/Container'
import { useState } from 'react'

export default function UserPage() {
  const [value, setValue] = useState('')
  return (
    <ClientLayout>
      <Container>
        <InputNumberMask value={value} onChange={(e: any) => e} />
        <Filterlayout />
      </Container>
    </ClientLayout>
  )
}
