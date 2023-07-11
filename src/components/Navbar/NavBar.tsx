import { useEffect } from 'react'
import styles from './NavBar.module.css'
import { ContainerSlider } from '../ContainersSliders/ContainerSlider'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AnyAction } from '@reduxjs/toolkit'
import { getCategorySelect } from '../../store/features/category-slice'

export const NavBar = () => {
	const { categoryData } = useSelector((state: any) => state.category)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getCategorySelect() as never as AnyAction)
	}, [])

	return (
		<div className={styles.container_navbar}>
			<div className={styles.container_inside_navbar}>
				<ContainerSlider
					dots={false}
					infinite={true}
					speed={400}
					slidesToShow={4}
					slidesToScroll={1}
					swipeToSlide={true}
					autoplay={true}
					autoplaySpeed={2000}
					pauseOnHover={true}
					arrowAndprev={true}
					typeButton={false}
					variableWidth={true}
				>
					{categoryData?.map(
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
