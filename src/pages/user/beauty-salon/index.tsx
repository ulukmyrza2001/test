import { Fragment } from 'react'
import styles from './Beauty.module.css'
import BannerSalon from '../../../assets/image/salon.svg'
import { Container } from '../../../styles/ContainerStyle/Container'

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
				<div></div>
				<div></div>
			</Container>
		</Fragment>
	)
}
