import { useState } from 'react'
import styles from './index.module.css'
import Select from 'react-select'

export const SuperAdminPage = () => {
	const [selectValue, setSelectValue] = useState({
		value: 'WEEK',
		label: 'Неделя',
	})

	const changeDateHandler = (e: any) => {
		setSelectValue(e)
	}

	const options = [
		{ value: 'WEEK', label: 'Неделя' },
		{ value: 'MONTH', label: 'Месяц' },
		{ value: 'YEAR', label: 'Год' },
	]
	return (
		<div className={styles.wrapper}>
			<div className={styles.inner_header}>
				<div className={styles.wrapper_logo}>
					<img
						src='https://n1s1.hsmedia.ru/fc/7c/25/fc7c259d375dccb2aa5c5c4db6e09eb1/300x277_0xac120003_3199571601615817427.jpg'
						alt=''
					/>
					<h1 className='title'>Чебер</h1>
				</div>
				<div className={styles.wrapper_select}>
					<Select
						options={options}
						placeholder='Неделя'
						value={selectValue}
						onChange={(e) => changeDateHandler(e)}
					/>
				</div>
			</div>
		</div>
	)
}
