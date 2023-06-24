'use client'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MainPage | Cheber'
}

interface CityProps {
  params: {
    city: string
  }
}

export default function MainPage({ params: { city } }: CityProps) {
  return <div>City route {city}</div>
}
