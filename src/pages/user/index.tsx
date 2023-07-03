import { Fragment } from 'react'
import { Container } from '../../styles/ContainerStyle/Container'
import { ContainerSlider } from '../../components/ContainersSliders/ContainerSlider'
import { ServiceCard } from '../../components/Cards/ServiceCard/ServiceCard'
import { NavBar } from '../../components/Navbar/NavBar'

const DATA = [
	{
		name: 'Стрижка волос',
	},
	{
		name: 'Маникюр',
	},
	{
		name: 'Педикюр',
	},
	{
		name: 'Укладка волос',
	},
	{
		name: 'Снятие покрытия',
	},
	{
		name: 'Коррекция бровей',
	},
	{
		name: 'Шугаринг',
	},
	{
		name: 'Снятие покрытия',
	},
]

export const UserPage = () => {
	return (
		<Fragment>
			<NavBar />
			<Container>
				{DATA.map((item, index) => {
					return (
						<div key={index} style={{ width: '100%' }}>
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
		</Fragment>
	)
}
