import { Fragment } from 'react'
import styles from './Beauty.module.css'
import AboutSalon from '../../../assets/image/about-salon.svg'
import BannerSalon from '../../../assets/image/salon.svg'
import { Container } from '../../../styles/ContainerStyle/Container'
import { ReactComponent as Icon1 } from '../../../assets/icons/001-salon (Traced).svg'
import { ReactComponent as Icon2 } from '../../../assets/icons/002-shampoo (Traced).svg'
import { ReactComponent as Icon3 } from '../../../assets/icons/003-hair-cutting (Traced).svg'
import { ReactComponent as Icon4 } from '../../../assets/icons/005-toiletries (Traced).svg'
import { ReviewContent } from './review-content'

export const BeautySalonPage = () => {
	return (
		<Fragment>
			<Container>
				<div className={styles.header}>
					<span>Home</span>
					<span>News</span>
					<span>About</span>
					<span>Contacts</span>
				</div>
			</Container>
			<Container
				backColor={{
					backgroundColor: '#cda582',
				}}
			>
				<div className={styles.banner}>
					<div className={styles.wrapper_banner}>
						<img src={BannerSalon} alt='Banner' />
					</div>
					<div className={styles.titles}>
						<p>
							Салон красоты <br /> Абу сулуу
						</p>
						<span>
							Amet minim mollit non deserunt ullamco est sit
							aliqua dolor do amet sint. Velit officia consequat
							duis enim velit mollit.
						</span>
					</div>
				</div>
			</Container>
			<Container>
				<div className={styles.wrapper_about}>
					<div className={styles.wrapper_about_title}>
						<p className={styles.about}>bueno beauty</p>
						<span>
							Amet minim mollit non deserunt ullamco est sit
							aliqua dolor do amet sint. Velit officia consequat
							duis enim velit mollit. Exercitation veniam
							consequat sunt nostrud amet. Velit officia consequat
							duis enim velit mollit
						</span>
						<div className={styles.about_services}>
							<div className={styles.card_about}>
								<Icon1 />
								<div>
									<p className='title'>Amet minim mollit</p>
									<span className='text'>
										Amet minim mollit non deserunt ullam co
										est sit.
									</span>
								</div>
							</div>
							<div className={styles.card_about}>
								<Icon2 />
								<div>
									<p className='title'>Amet minim mollit</p>
									<span className='text'>
										Amet minim mollit non deserunt ullam co
										est sit.
									</span>
								</div>
							</div>
							<div className={styles.card_about}>
								<Icon3 />
								<div>
									<p className='title'>Amet minim mollit</p>
									<span className='text'>
										Amet minim mollit non deserunt ullam co
										est sit.
									</span>
								</div>
							</div>
							<div className={styles.card_about}>
								<Icon4 />
								<div>
									<p className='title'>Amet minim mollit</p>
									<span className='text'>
										Amet minim mollit non deserunt ullam co
										est sit.
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.wrapper_about_img}>
						<img src={AboutSalon} alt='' />
					</div>
				</div>
			</Container>
			<ReviewContent />
		</Fragment>
	)
}
