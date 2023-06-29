'use client'

import ClientLayout from '@/src/app/user/layout'
import { Container } from '@/src/styles/ContainerStyle/Container'
import { NavBar } from '@/src/components/Navbar/NavBar'
import { ContainerSlider } from '@/src/components/ContainersSliders/ContainerSlider'
import { ServiceCard } from '@/src/components/Cards/ServiceCard/ServiceCard'

export default function UserPage() {
  const DATA = [
    {
      name: 'Стрижка волос'
    },
    {
      name: 'Маникюр'
    },
    {
      name: 'Педикюр'
    },
    {
      name: 'Укладка волос'
    },
    {
      name: 'Снятие покрытия'
    },
    {
      name: 'Коррекция бровей'
    },
    {
      name: 'Шугаринг'
    },
    {
      name: 'Снятие покрытия'
    }
  ]

  return (
    <ClientLayout>
      <NavBar />
      <Container>
        {DATA.map((item) => {
          return (
            <div style={{ width: '100%' }}>
              <ContainerSlider
                dots={false}
                infinite={true}
                speed={400}
                slidesToShow={4}
                slidesToScroll={1}
                swipeToSlide={true}
                autoplay={false}
                pauseOnHover={true}
                arrowAndprev={true}
                typeButton={true}
                variableWidth={true}
                label={item.name}
              >
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
                <ServiceCard />
              </ContainerSlider>
            </div>
          )
        })}
      </Container>
    </ClientLayout>
  )
}
