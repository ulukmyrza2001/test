import { Fragment, useEffect } from 'react'
import styles from './Barber.module.css'
import Img from '../../../assets/image/imgBarber.png'
import { Container } from '../../../styles/ContainerStyle/Container'
import { CgShapeRhombus } from 'react-icons/cg'
import { AboutContent } from './aboutContent'
import { ServicesContent } from './servicesContent'
import { ServicesBranchContent } from './servicesBranchContent'
import BannerBarber from '../../../assets/image/barber.svg'

export const BarberPage = () => {
	useEffect(() => {
		document.title = 'Barber | Cheber'
		return () => {
			document.title = 'Cheber' // Reset the title when the component unmounts
		}
	}, [])
	return (
		<Fragment>
			<Container
				backColor={{
					backgroundImage: `url(${BannerBarber})`,
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					padding: '2rem',
				}}
			>
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
						<CgShapeRhombus color='gold' fontSize={36} />
						<p>
							We do our work quickly, time flies by and you are
							the happy owner of a stylish haircut
						</p>
					</div>
					<div className={styles.wrapper_services_title_card}>
						<h3>Cool</h3>
						<CgShapeRhombus color='gold' fontSize={36} />
						<p>
							We do our work quickly, time flies by and you are
							the happy owner of a stylish haircut
						</p>
					</div>
					<div className={styles.wrapper_services_title_card}>
						<h3>Expensive</h3>
						<CgShapeRhombus color='gold' fontSize={36} />
						<p>
							Our masters are professionals and can't be cheap,
							and doesn't the price give a certain status
						</p>
					</div>
				</div>
				<div className={styles.about_barber}>
					<div className={styles.about_text}>
						<span className='title'>News</span>
						<span className='text'>11 JUNE</span>
						<p>
							We finally got a mini-bar and a coffee machine, now
							you can cool down with a cold drink in hot weather,
							and have a cup of coffee in cold weather.
						</p>
						<span className='text'>11 JUNE</span>
						<p>
							Boris "Razor" has many titles and awards in our
							team, he can give you absolutely any haircut and do
							something incredible with your beard
						</p>
					</div>
					<hr />
					<div className={styles.wrapper_slider}>
						<img src={Img} />
					</div>
				</div>
			</Container>
			<br />
			<AboutContent />
			<br />
			<ServicesBranchContent />
			<ServicesContent />
		</Fragment>
	)
}
