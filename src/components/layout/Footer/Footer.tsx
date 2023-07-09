import { Link, useLocation } from 'react-router-dom'
import styles from './Footer.module.css'
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs'

export const Footer = () => {
	const { pathname } = useLocation()
	const path = pathname.slice(1)
	return (
		<footer className={styles.footer}>
			<div className={styles.inner_footer}>
				<div className={styles.wrapper_links}>
					<Link
						to='/'
						className={styles.logo}
						style={
							path === 'barber'
								? { color: 'white' }
								: { color: 'black' }
						}
					>
						Чебер
					</Link>
					<p className={`text ${path}-text`}>
						Сервис онлайн бронирования в <br /> сфере красоты и
						здоровья.
					</p>
				</div>
				<div className={styles.wrapper_links}>
					<Link to='/'>
						<p className={`text ${path}-text`}>Стать партнером</p>
					</Link>
					<Link to='/'>
						<p className={`text ${path}-text`}>Контакты</p>
					</Link>
					<Link to='/'>
						<p className={`text ${path}-text`}>Карта сайта</p>
					</Link>
				</div>
				<div className={styles.wrapper_links}>
					<Link to='/privacy'>
						<p className={`text ${path}-text`}>
							Политика конфиденциальности
						</p>
					</Link>
					<Link to='/terms'>
						<p className={`text ${path}-text`}>
							Пользовательское соглашение
						</p>
					</Link>
					<Link to='/'>
						<p className={`text ${path}-text`}>
							Правила онлайн оплаты
						</p>
					</Link>
				</div>
				<div className={styles.wrapper_links_icons}>
					<a
						href='https://www.instagram.com/'
						target='_blank'
						rel='noreferrer'
					>
						<BsInstagram
							className={styles.icons}
							style={
								path === 'barber'
									? { color: 'white' }
									: { color: 'gray' }
							}
						/>
					</a>
					<a
						href='https://www.meta.com/'
						target='_blank'
						rel='noreferrer'
					>
						<BsFacebook
							className={styles.icons}
							style={
								path === 'barber'
									? { color: 'white' }
									: { color: 'gray' }
							}
						/>
					</a>
					<a
						href='https://www.whatsapp.com/?lang=ru'
						target='_blank'
						rel='noreferrer'
					>
						<BsWhatsapp
							className={styles.icons}
							style={
								path === 'barber'
									? { color: 'white' }
									: { color: 'gray' }
							}
						/>
					</a>
				</div>
			</div>
		</footer>
	)
}
