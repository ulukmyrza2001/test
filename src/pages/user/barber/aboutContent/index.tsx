import styles from './About.module.css'
import Img1 from '../../../../assets/image/imgBarber2.png'
import { Container } from '../../../../styles/ContainerStyle/Container'

export const AboutContent = () => {
	return (
		<Container backColor={{ backgroundColor: 'black' }}>
			<div className={styles.wrapper_about}>
				<div className={styles.wrapper_img_about}>
					<img src={Img1} alt='IMG' />
				</div>
				<div className={styles.wrapper_map}>asdasd</div>
			</div>
		</Container>
	)
}
