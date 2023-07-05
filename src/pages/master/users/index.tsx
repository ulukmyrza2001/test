import styles from './Users.module.css'

export const UsersPage = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<h1 className='name_page'>Пользователи</h1>
			</div>
			<br />
			Пользователи
		</div>
	)
}
