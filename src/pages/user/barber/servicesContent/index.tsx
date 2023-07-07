import React from 'react'
import styles from './Services.module.css'
import BackSliderImg from '../../../../assets/image/barberSlide.svg'
import { Container } from '../../../../styles/ContainerStyle/Container'
import { ContainerSlider } from '../../../../components/ContainersSliders/ContainerSlider'
import { ServiceCard } from '../../../../components/Cards/ServiceCard/ServiceCard'

export const ServicesContent = () => {
	return (
		<Container
			backColor={{
				backgroundImage: `url(${BackSliderImg})`,
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				padding: '2rem',
			}}
		>
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
			>
				<ServiceCard />
				<ServiceCard />
				<ServiceCard />
				<ServiceCard />
				<ServiceCard />
				<ServiceCard />
			</ContainerSlider>
		</Container>
	)
}
