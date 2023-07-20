import React from 'react'
import styles from './PopularServices.module.css'
import { Container } from '../../../../styles/ContainerStyle/Container'
import Test from '../../../../assets/image/imgBarber.png'

const data = [
	{
		img: Test,
		name: 'brows and lashes',
	},
	{
		img: Test,
		name: 'brows and lashes',
	},
	{
		img: Test,
		name: 'brows and lashes',
	},
	{
		img: Test,
		name: 'brows and lashes',
	},
	{
		img: Test,
		name: 'brows and lashes',
	},
	{
		img: Test,
		name: 'brows and lashes',
	},
]

export const PopularServicesContent = () => {
	return (
		<Container>
			<div className={styles.wrapper}>
				<h1 className={styles.title}>• Популярные Услуги •</h1>
				<div className={styles.wrapper_cards}>
					{data?.map((item: any) => (
						<div className={styles.card}>
							<img src={item.img} alt='logo' />
							<div className={styles.name}>{item.name}</div>
						</div>
					))}
				</div>
			</div>
		</Container>
	)
}
