import styles from './Branchs.module.css'
import { Container } from '../../../styles/ContainerStyle/Container'
import { CgShapeRhombus } from 'react-icons/cg'

export const Branchs = () => {
	return (
		<Container>
			<div className={styles.header}>
				<span>Home</span>
				<span>News</span>
				<span>About</span>
				<span>Contacts</span>
			</div>
			<div className={styles.titles}>
				<h2>PREMIUM</h2>
				<h1>BARBERSHOP BEYBARS</h1>
			</div>
			<div className={styles.wrapper_services_title}>
				<div className={styles.wrapper_services_title_card}>
					<h3>Quick</h3>
					<CgShapeRhombus fontSize={36} />
					<p>
						We do our work quickly, time flies by and you are the
						happy owner of a stylish haircut
					</p>
				</div>
				<div className={styles.wrapper_services_title_card}>
					<h3>Cool</h3>
					<CgShapeRhombus fontSize={36} />
					<p>
						We do our work quickly, time flies by and you are the
						happy owner of a stylish haircut
					</p>
				</div>
				<div className={styles.wrapper_services_title_card}>
					<h3>Expensive</h3>
					<CgShapeRhombus fontSize={36} />
					<p>
						Our masters are professionals and can't be cheap, and
						doesn't the price give a certain status
					</p>
				</div>
			</div>
		</Container>
	)
}
