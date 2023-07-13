import styles from './About.module.css'
import Img1 from '../../../../assets/image/imgBarber2.png'
import { Container } from '../../../../styles/ContainerStyle/Container'
import Map from '../../../../assets/image/map.png'

export const AboutContent = () => {
	return (
		<Container backColor={{ backgroundColor: 'black' }}>
			<div className={styles.wrapper_about}>
				<div className={styles.wrapper_img_about}>
					<img src={Img1} alt='IMG' />
				</div>
				<div className={styles.wrapper_map}>
					<p className='title' style={{ color: 'white' }}>
						Где мы находимся
					</p>
					<div>
						<img src={Map} alt='' />
					</div>
				</div>
			</div>
		</Container>
	)
}
