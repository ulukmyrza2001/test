import React, { useEffect } from 'react'
import styles from './NavBar.module.css'
import { ContainerSlider } from '../ContainersSliders/ContainerSlider'
import { HiMiniScissors } from 'react-icons/hi2'
import { GiBeard, GiDoctorFace } from 'react-icons/gi'
import { BiBody } from 'react-icons/bi'
import { FaTooth, FaHandHoldingHeart } from 'react-icons/fa'
import { FaPersonRays } from 'react-icons/fa6'
import {
	MdOutlineMedicalServices,
	MdOutlineFaceRetouchingNatural,
	MdOutlineFace2,
} from 'react-icons/md'
import { SiBritishairways } from 'react-icons/si'
import { GiEyelashes, GiFlowerTwirl } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AnyAction } from '@reduxjs/toolkit'
import { getCategory } from '../../store/features/category-service'

export const NavBar = () => {
	const { category } = useSelector((state: any) => state.categoryService)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getCategory() as never as AnyAction)
	}, [])

	console.log(category?.content)

	return (
		<div className={styles.container_navbar}>
			<div className={styles.container_inside_navbar}>
				<ContainerSlider
					dots={false}
					infinite={true}
					speed={400}
					slidesToShow={7}
					slidesToScroll={1}
					swipeToSlide={true}
					autoplay={true}
					autoplaySpeed={2000}
					pauseOnHover={true}
					arrowAndprev={true}
					typeButton={false}
					variableWidth={true}
				>
					{category?.content?.map(
						(item: { name: string; icon: any; id: string }) => {
							return (
								<Link
									to={`filter/${item.id}/${item.name}`}
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
