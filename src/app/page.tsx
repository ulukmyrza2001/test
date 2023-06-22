'use client'

import { Button } from '../components/UI/Buttons/Button'
import { ImagePicker } from '../components/UI/ImagePicker/ImagePicker'
import IsEmptyImagePicker from '../assets/image/isEmptyImagePicker.jpg'
import { useState } from 'react'

export default function Home() {
  const [asd, setasd] = useState()

  const handleGetImages = (file: unknown) => {
    // Handle the selected image file
    console.log('Selected file:', file)
  }
  return <main>CHEBER</main>
}
