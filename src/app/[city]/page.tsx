'use client'

import { Metadata } from 'next'
import styled from 'styled-components'

export const metadata: Metadata = {
  title: 'MainPage | Cheber'
}

interface CityProps {
  params: {
    city: string
  }
}
export async function generateMetadata({ params: { city } }: CityProps): Promise<Metadata> {
  return {
    title: city
  }
}

export default function MainPage({ params: { city } }: CityProps) {
  return <div>City route = {city}</div>
}
