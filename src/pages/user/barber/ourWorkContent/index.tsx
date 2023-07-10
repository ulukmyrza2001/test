import styles from './OurWork.module.css'
import BackSliderImg from '../../../../assets/image/barberSlide.svg'
import { Container } from '../../../../styles/ContainerStyle/Container'
import { ContainerSlider } from '../../../../components/ContainersSliders/ContainerSlider'
import SlideIMG from '../../../../assets/image/Barbershop DKA (Community)/2599686f09760f836e772f9cd94bf0fb 1.png'
import SlideIMG1 from '../../../../assets/image/Barbershop DKA (Community)/9dbd4c887750a34f1f87b086f32ecaff--long-hairstyles-for-men-creative-hairstyles 2.png'
import SlideIMG2 from '../../../../assets/image/Barbershop DKA (Community)/e1fc5d2c3ce12a5caf64c662c504ee73 1.png'
import SlideIMG3 from '../../../../assets/image/Barbershop DKA (Community)/w9EzUhy0KQo 1.png'

export const OurWorkContent = () => {
	return (
		<Container
			backColor={{
				backgroundImage: `url(${BackSliderImg})`,
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				padding: '2rem',
				minHeight: '400px',
			}}
		>
			<p className={styles.title}>НАШИ РАБОТЫ</p>
			<ContainerSlider
				dots={false}
				infinite={true}
				speed={400}
				slidesToShow={2}
				slidesToScroll={1}
				swipeToSlide={true}
				autoplay={false}
				pauseOnHover={true}
				arrowAndprev={true}
				typeButton={true}
				variableWidth={true}
			>
				<div className={styles.slide_card}>
					<img src={SlideIMG} />
				</div>
				<div className={styles.slide_card}>
					<img src={SlideIMG1} />
				</div>
				<div className={styles.slide_card}>
					<img src={SlideIMG2} />
				</div>
				<div className={styles.slide_card}>
					<img src={SlideIMG3} />
				</div>
				<div className={styles.slide_card}>
					<img src={SlideIMG3} />
				</div>
				<div className={styles.slide_card}>
					<img src={SlideIMG3} />
				</div>
			</ContainerSlider>
		</Container>
	)
}
