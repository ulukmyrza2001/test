import styles from './Tariffs.module.css'
import { Button } from '../../../components/UI/Buttons/Button/Button'

export const TariffsPage = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<h1 className='name_page'>Тарифы</h1>
				<div>
					<Button>Добавить</Button>
				</div>
			</div>
			<br />
			Тарифы
		</div>
	)
}
