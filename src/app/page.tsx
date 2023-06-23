'use client'

import React, { useState } from 'react'
import { LonelySelect } from '../components/UI/Select/LonelySelect'

export default function Home() {
  const [state, setState] = useState(null)

  const options = [
    { value: 1, label: 'Одежда' },
    { value: 2, label: 'Рубашки' },
    { value: 3, label: 'Штаны' }
  ]

  console.log(state)
  return (
    <main>
      <LonelySelect
        options={options}
        label="Категория"
        placeholder="Категория"
        noOptionsMessage={() => 'abu'}
        value={state}
        isClearable={true}
        onChange={(e) => setState(e)}
        isLoading={true}
        isDisabled={false}
      />
    </main>
  )
}
