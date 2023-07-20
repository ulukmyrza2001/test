import React from 'react'
import styles from './Masters.module.css'
import { Container } from '../../../../styles/ContainerStyle/Container'
import { BsInstagram } from 'react-icons/bs'
import MasterImg from '../../../../assets/image/frontAbout.jpg'
import { ContainerSlider } from '../../../../components/ContainersSliders/ContainerSlider'

export const MastersContent = () => {
	return (
		<Container>
			<div className={styles.wrapper}>
				<div className={styles.wrapper_title}>
					<p>Познакомьтесь с нашими экспертами</p>
					<h1 className={styles.title}>• Наши мастера •</h1>
				</div>
				<div className={styles.wrapper_masters}>
					<ContainerSlider
						dots={true}
						infinite={true}
						speed={400}
						slidesToShow={3}
						slidesToScroll={1}
						swipeToSlide={true}
						autoplay={false}
						pauseOnHover={true}
						arrowAndprev={true}
						typeButton={true}
						variableWidth={true}
					>
						<div className={styles.card}>
							<img src={MasterImg} alt='' />
							<div>
								<p className='title'>Maria Sharapova</p>
								<span className='text'>Beautyness Expert</span>
							</div>
							<p>
								I must explain to you how all this mistaken idea
								of denouncing pleasure that will araise praising
								pain
							</p>
							<div className={styles.wrapper_button}>
								<button>Записаться</button>
							</div>
						</div>
						<div className={styles.card}>
							<img src={MasterImg} alt='' />
							<div>
								<p className='title'>Maria Sharapova</p>
								<span className='text'>Beautyness Expert</span>
							</div>
							<p>
								I must explain to you how all this mistaken idea
								of denouncing pleasure that will araise praising
								pain
							</p>
							<div className={styles.wrapper_button}>
								<button>Записаться</button>
							</div>
						</div>
						<div className={styles.card}>
							<img src={MasterImg} alt='' />
							<div>
								<p className='title'>Maria Sharapova</p>
								<span className='text'>Beautyness Expert</span>
							</div>
							<p>
								I must explain to you how all this mistaken idea
								of denouncing pleasure that will araise praising
								pain
							</p>
							<div className={styles.wrapper_button}>
								<button>Записаться</button>
							</div>
						</div>
						<div className={styles.card}>
							<img src={MasterImg} alt='' />
							<div>
								<p className='title'>Maria Sharapova</p>
								<span className='text'>Beautyness Expert</span>
							</div>
							<p>
								I must explain to you how all this mistaken idea
								of denouncing pleasure that will araise praising
								pain
							</p>
							<div className={styles.wrapper_button}>
								<button>Записаться</button>
							</div>
						</div>
					</ContainerSlider>
				</div>
			</div>
		</Container>
	)
}
