import styles from './Announcements.module.css'
import { Button } from '../../../components/UI/Buttons/Button/Button'

export const AnnouncementsPage = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<h1 className='name_page'>Объявления</h1>
				<div>
					<Button>Добавить</Button>
				</div>
			</div>
			<br />
			Объявления
		</div>
	)
}
