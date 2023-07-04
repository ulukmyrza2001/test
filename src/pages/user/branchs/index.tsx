import styles from './Branchs.module.css'
import { ServiceCard } from '../../../components/Cards/ServiceCard/ServiceCard'
import { ContainerSlider } from '../../../components/ContainersSliders/ContainerSlider'
import { Filterlayout } from '../../../components/Filter/FilterLayout/FilterLayout'
import { Container } from '../../../styles/ContainerStyle/Container'

export const Branchs = () => {
	return (
		<Container
			sx={{
				paddingTop: '20px',
			}}
		>
			<h2 className='title'>Парикмахерские услуги</h2>
			<div className={styles.wrapper}>
				<Filterlayout />
				<div className={styles.inner_wrapper}>
					<span>135 результатов</span>
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
					</ContainerSlider>
				</div>
			</div>
		</Container>
	)
}
