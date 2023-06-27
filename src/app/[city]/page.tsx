'use client'

import { ContainerSlider } from '@/src/components/ContainersSliders/ContainerSlider'
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
  return (
    <div>
      {/* City route = {city} */}
      <StyledContainer>
        <ContainerSlider
          dots={true}
          infinite={true}
          speed={400}
          slidesToShow={3}
          slidesToScroll={1}
          autoplay={false}
          arrowAndprev={true}
          typeButton={true}
        >
          <StyledCard>
            <span>ABU</span>
          </StyledCard>
          <StyledCard>
            <span>ABU</span>
          </StyledCard>
          <StyledCard>
            <span>ABU</span>
          </StyledCard>
          <StyledCard>
            <span>ABU</span>
          </StyledCard>
          <StyledCard>
            <span>ABU</span>
          </StyledCard>
        </ContainerSlider>
      </StyledContainer>
    </div>
  )
}

const StyledContainer = styled.div`
  width: 90%;
  margin: auto;
`

const StyledCard = styled.div`
  width: 435px;
  height: 100px;
  background-color: teal;
`
