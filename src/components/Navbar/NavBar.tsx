import { useEffect } from 'react'
import styles from './NavBar.module.css'
import { ContainerSlider } from '../ContainersSliders/ContainerSlider'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AnyAction } from '@reduxjs/toolkit'
import { getCategoryServiceSelect } from '../../store/features/category-service'

export const NavBar = () => {
	const { categoryServiceSelectData } = useSelector(
		(state: any) => state.categoryService,
	)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getCategoryServiceSelect() as never as AnyAction)
	}, [])

	console.log(categoryServiceSelectData)

	return (
		<div className={styles.container_navbar}>
			<div className={styles.container_inside_navbar}>
				<ContainerSlider
					dots={false}
					infinite={true}
					speed={400}
					slidesToShow={3}
					slidesToScroll={1}
					swipeToSlide={true}
					autoplay={true}
					autoplaySpeed={2000}
					pauseOnHover={true}
					arrowAndprev={true}
					typeButton={false}
					variableWidth={true}
				>
					{categoryServiceSelectData?.map(
						(item: { name: string; icon: any; id: string }) => {
							return (
								<Link
									to={`filter/${item.id}`}
									key={item.id}
									className={styles.container_card}
								>
									<div className={styles.card_icon}>
										<img src={item?.icon} alt='icon' />
									</div>
									<div className={styles.card_title}>
										{item.name}
									</div>
								</Link>
							)
						},
					)}
				</ContainerSlider>
			</div>
		</div>
	)
}
