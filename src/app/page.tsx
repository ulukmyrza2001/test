'use client'

import React from 'react'
import { useState } from 'react'
import { Container } from '../styles/ContainerStyle/Container'
import { DataPicker } from '../components/UI/DataPicker/DataPicker'

export default function Home() {
  const [value, setValue] = useState('')
  console.log(value)
  return (
    <Container>
      <DataPicker value={value} onChange={(e: any) => setValue(e)} />
    </Container>
  )
}
