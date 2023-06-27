'use client'

import { Container } from '@/src/styles/ContainerStyle/Container'
import { Metadata } from 'next'

interface Props {
  params: {
    city: string
  }
}

export const metadata: Metadata = {
  title: 'Partner | Cheber'
}

export async function generateMetaData({ params: { city } }: Props): Promise<Metadata> {
  return {
    title: city
  }
}

export default function PartnerPage() {
  return <div>Partner</div>
}
