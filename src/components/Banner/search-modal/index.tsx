import { useEffect } from 'react'
import styles from './SearchModal.module.css'
import { ModalComponent } from '../../UI/Modal/Modal'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoryServiceSelect } from '../../../store/features/category-service'
import { AnyAction } from '@reduxjs/toolkit'
import { Button } from '../../UI/Buttons/Button/Button'
import { Link } from 'react-router-dom'

interface SearchModalProps {
	active: boolean
	hideHandler: any
}

export const SearchModal = (props: SearchModalProps) => {
	const { categoryServiceSelectData } = useSelector(
		(state: any) => state.categoryService,
	)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getCategoryServiceSelect() as never as AnyAction)
	}, [])

	return (
		<ModalComponent
			active={props.active}
			handleClose={props.hideHandler}
			title='SearchModal'
		>
			<div className={styles.wrapper}>
				<div className={styles.wrapper_search_input}>
					<input />
					<Button>Search</Button>
				</div>
				<div className={styles.wrapper_cotegory}>
					{categoryServiceSelectData?.map((item: any) => (
						<Link
							to={`filter/${item.id}`}
							key={item.id}
							className={styles.category}
						>
							{item.name}
						</Link>
					))}
				</div>
			</div>
		</ModalComponent>
	)
}
