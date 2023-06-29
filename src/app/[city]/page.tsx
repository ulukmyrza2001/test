'use client'

import { SwiperPhoto } from '@/src/components/UI/SwiperPhoto/SwiperPhoto'
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
  const dates = [
    {
      img: 'https://swiperjs.com/demos/images/nature-6.jpg',
      id: 0
    },
    {
      img: 'https://swiperjs.com/demos/images/nature-7.jpg',
      id: 1
    },
    {
      img: 'https://swiperjs.com/demos/images/nature-8.jpg',
      id: 2
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQP9nF-VtPjMBNHsDS7DU3VbUPyUGxNCEejLuSfmC5&s',
      id: 3
    },
    {
      img: 'https://swiperjs.com/demos/images/nature-10.jpg',
      id: 4
    },
    {
      img: 'https://swiperjs.com/demos/images/nature-5.jpg',
      id: 5
    },
    {
      img: 'https://swiperjs.com/demos/images/nature-4.jpg',
      id: 6
    },
    {
      img: 'https://swiperjs.com/demos/images/nature-3.jpg',
      id: 7
    },
    {
      img: 'https://swiperjs.com/demos/images/nature-2.jpg',
      id: 8
    },
    {
      img: 'https://swiperjs.com/demos/images/nature-1.jpg',
      id: 9
    }
  ]
  return (
    <div>
      City route = {city}
      <div style={{ width: '100%' }}>
        <SwiperPhoto imagesData={dates} />
      </div>
    </div>
  )
}
