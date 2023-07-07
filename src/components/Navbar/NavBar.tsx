import React from 'react'
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

const NAVBAR_DATA = [
	{
		name: 'Парикмахерские услуги',
		icon: HiMiniScissors,
		link: '/barber',
	},
	{
		name: 'Для мужчин',
		icon: GiBeard,
		link: '/barber',
	},
	{
		name: 'Ногтевой сервис',
		icon: FaHandHoldingHeart,
		link: '/barber',
	},
	{
		name: 'Удаление волос',
		icon: MdOutlineFaceRetouchingNatural,
		link: '/barber',
	},
	{
		name: 'Ресницы',
		icon: GiEyelashes,
		link: '/barber',
	},
	{
		name: 'Брови',
		icon: SiBritishairways,
		link: '/barber',
	},
	{
		name: 'Уход за телом',
		icon: BiBody,
		link: '/barber',
	},
	{
		name: 'Косметология',
		icon: GiDoctorFace,
		link: '/barber',
	},
	{
		name: 'Макияж',
		icon: MdOutlineFace2,
		link: '/barber',
	},
	{
		name: 'Стоматология',
		icon: FaTooth,
		link: '/barber',
	},
	{
		name: 'Медицинские услуги',
		icon: MdOutlineMedicalServices,
		link: '/barber',
	},
	{
		name: 'Тату и пирсинг',
		icon: GiFlowerTwirl,
		link: '/barber',
	},
	{
		name: 'Коррекция фигуры',
		icon: FaPersonRays,
		link: '/barber',
	},
]

export const NavBar = () => {
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
