import { Link } from 'react-router-dom'
import styles from './PartnerHeader.module.css'

export const PartnerHeader = () => {
	return (
		<header className={styles.header}>
			<div className={styles.inner_header}>
				<div>
					<Link to='/' className={styles.logo}>
						Чебер
					</Link>
				</div>
				<div className={styles.wrapper_nav}>
					<Link to='/partner'>Возможности программы</Link>
					<Link to='/partner'>Zapis в цифрах</Link>
					<Link to='/partner'>Онлайн запись</Link>
					<Link to='/partner'>Тарифы</Link>
					<Link to='/partner'>Нас рекомендуют</Link>
					<Link to='/partner'>Контакты</Link>
				</div>
			</div>
		</header>
	)
}
