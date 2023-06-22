'use client'

import { useState } from 'react'
import { ImagePicker } from '../components/UI/ImagePicker/ImagePicker'
import { Button } from '../components/UI/Buttons/Button'

export default function Home() {
  const [asd, setasd] = useState()

  const handleGetImages = (file: unknown) => {
    // Handle the selected image file
    console.log('Selected file:', file)
  }
  return (
    <main>
      CHEBER
      <Button onClick={() => console.log('asd')}>Click me!</Button>
      <ImagePicker getImages={handleGetImages} defaultValue="default-image.jpg" />
    </main>
  )
}
