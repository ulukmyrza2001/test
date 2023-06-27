'use client'

import { ContainerSlider } from '@/src/components/ContainersSliders/ContainerSlider'
import { Metadata } from 'next'

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
  return (
    <div>
      City route = {city}
      <ContainerSlider
        dots={true}
        infinite={true}
        speed={400}
        slidesToShow={3}
        slidesToScroll={1}
        autoplay={false}
        arrowAndprev={true}
        typeButton={false}
      >
        <div>
          <span>ABU</span>
        </div>
        <div>
          <span>ABU</span>
        </div>
        <div>
          <span>ABU</span>
        </div>
        <div>
          <span>ABU</span>
        </div>
      </ContainerSlider>
    </div>
  )
}
