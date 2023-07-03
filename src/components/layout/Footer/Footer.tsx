import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.inner_footer}>
				<div className={styles.wrapper_links}>
					<Link to='/' className={styles.logo}>
						Чебер
					</Link>
					<p className='text'>
						Сервис онлайн бронирования в <br /> сфере красоты и
						здоровья.
					</p>
				</div>
				<div className={styles.wrapper_links}>
					<Link to='/'>
						<p className='text'>Стать партнером</p>
					</Link>
					<Link to='/'>
						<p className='text'>Контакты</p>
					</Link>
					<Link to='/'>
						<p className='text'>Карта сайта</p>
					</Link>
				</div>
				<div className={styles.wrapper_links}>
					<Link to='/'>
						<p className='text'>Стать партнером</p>
					</Link>
					<Link to='/'>
						<p className='text'>Контакты</p>
					</Link>
					<Link to='/'>
						<p className='text'>Карта сайта</p>
					</Link>
				</div>
				<div className={styles.wrapper_links}>
					<Link to='/'>
						<p className='text'>Стать партнером</p>
					</Link>
					<Link to='/'>
						<p className='text'>Контакты</p>
					</Link>
					<Link to='/'>
						<p className='text'>Карта сайта</p>
					</Link>
				</div>
			</div>
		</footer>
	)
}
