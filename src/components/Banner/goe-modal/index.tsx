import React from 'react'
import styles from './GeoModal.module.css'
import { ModalComponent } from '../../UI/Modal/Modal'
import { Button } from '../../UI/Buttons/Button/Button'

const data = [
	{
		id: 1,
		name: 'Bishkek',
	},
	{
		id: 2,
		name: 'Kant',
	},
	{
		id: 3,
		name: 'Tokmok',
	},
]

interface GeoModalProps {
	active: boolean
	hideHandler: any
}

export const GeoModal = (props: GeoModalProps) => {
	return (
		<ModalComponent
			active={props.active}
			handleClose={props.hideHandler}
			title='GeoModal'
		>
			<div className={styles.wrapper}>
				<div className={styles.wrapper_search_input}>
					<input />
					<Button>Search</Button>
				</div>
				<div className={styles.wrapper_cotegory}>
					{data?.map((item: any) => (
						<div key={item.id} className={styles.category}>
							{item.name}
						</div>
					))}
				</div>
			</div>
		</ModalComponent>
	)
}
