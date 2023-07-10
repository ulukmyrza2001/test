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
import { getCategory } from '../../store/features/category-slice'
import { AnyAction } from '@reduxjs/toolkit'

const NAVBAR_DATA = [
	{
		name: 'Парикмахерские услуги',
		icon: HiMiniScissors,
		link: '/barber',
	},
	{
		name: 'Для мужчин',
		icon: GiBeard,
		link: '/filter/for-man',
	},
	{
		name: 'Ногтевой сервис',
		icon: FaHandHoldingHeart,
		link: '/filter/manicure',
	},
	{
		name: 'Удаление волос',
		icon: MdOutlineFaceRetouchingNatural,
		link: '/filter/depilation',
	},
	{
		name: 'Ресницы',
		icon: GiEyelashes,
		link: '/filter/eyelashes',
	},
	{
		name: 'Брови',
		icon: SiBritishairways,
		link: '/filter/brows',
	},
	{
		name: 'Уход за телом',
		icon: BiBody,
		link: '/filter/body-care',
	},
	{
		name: 'Косметология',
		icon: GiDoctorFace,
		link: '/filter',
	},
	{
		name: 'Макияж',
		icon: MdOutlineFace2,
		link: '/filter/cosmetology',
	},
	{
		name: 'Стоматология',
		icon: FaTooth,
		link: '/filter/dentistry',
	},
	{
		name: 'Медицинские услуги',
		icon: MdOutlineMedicalServices,
		link: '/filter/medical-services',
	},
	{
		name: 'Тату и пирсинг',
		icon: GiFlowerTwirl,
		link: '/filter/tattoo-and-piercing',
	},
	{
		name: 'Коррекция фигуры',
		icon: FaPersonRays,
		link: '/filter/correction',
	},
]

export const NavBar = () => {
	const { category } = useSelector((state: any) => state.category)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getCategory() as never as AnyAction)
	}, [])

	console.log(category)

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
					{NAVBAR_DATA.map(
						(item: { name: string; icon: any; link: string }) => {
							return (
								<Link
									to={item.link}
									key={item.link}
									className={styles.container_card}
								>
									<div className={styles.card_title}>
										{item.name}
									</div>
									<div className={styles.card_icon}>
										{React.createElement(item?.icon, {
											size: '30',
										})}
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
