import React, { useEffect } from 'react'
import styles from './ServicesBranchBeauty.module.css'
import { Container } from '../../../../styles/ContainerStyle/Container'
import { AnyAction } from '@reduxjs/toolkit'
import { AccordionUi } from '../../../../components/UI/Accordion/AccordionUi'
import { useDispatch, useSelector } from 'react-redux'
import { getServices } from '../../../../store/features/service-slice'
import { useParams } from 'react-router-dom'
import { IoPhonePortraitOutline } from 'react-icons/io5'

interface TabPanelProps {
	children?: React.ReactNode
	index: number
	value: number
}

const data = [
	{
		id: 2,
		name: 'Парикмахерские услуги',
		icon: 'https://ak-soft.s3.eu-central-1.amazonaws.com/1689074435315_barber.jpeg',
		subCategoryServices: [
			{
				id: 1,
				name: 'Стрижка мужская',
				serviceResponses: [
					{
						id: 1,
						name: 'Стрижка волос',
						price: 800,
						duration: 60,
					},
				],
			},
			{
				id: 2,
				name: 'Стрижка мужская',
				serviceResponses: [
					{
						id: 3,
						name: 'Стрижка волос',
						price: 800,
						duration: 59,
					},
					{
						id: 2,
						name: 'Стрижка future',
						price: 800,
						duration: 40,
					},
				],
			},
		],
	},
	{
		id: 2,
		name: 'Парикмахерские услуги',
		icon: 'https://ak-soft.s3.eu-central-1.amazonaws.com/1689074435315_barber.jpeg',
		subCategoryServices: [
			{
				id: 1,
				name: 'Стрижка мужская',
				serviceResponses: [
					{
						id: 1,
						name: 'Стрижка волос',
						price: 800,
						duration: 60,
					},
				],
			},
			{
				id: 2,
				name: 'Стрижка мужская',
				serviceResponses: [
					{
						id: 3,
						name: 'Стрижка волос',
						price: 800,
						duration: 59,
					},
					{
						id: 2,
						name: 'Стрижка future',
						price: 800,
						duration: 40,
					},
				],
			},
		],
	},
	{
		id: 2,
		name: 'Парикмахерские услуги',
		icon: 'https://ak-soft.s3.eu-central-1.amazonaws.com/1689074435315_barber.jpeg',
		subCategoryServices: [
			{
				id: 1,
				name: 'Стрижка мужская',
				serviceResponses: [
					{
						id: 1,
						name: 'Стрижка волос',
						price: 800,
						duration: 60,
					},
				],
			},
			{
				id: 2,
				name: 'Стрижка мужская',
				serviceResponses: [
					{
						id: 3,
						name: 'Стрижка волос',
						price: 800,
						duration: 59,
					},
					{
						id: 2,
						name: 'Стрижка future',
						price: 800,
						duration: 40,
					},
				],
			},
		],
	},
	{
		id: 2,
		name: 'Парикмахерские услуги',
		icon: 'https://ak-soft.s3.eu-central-1.amazonaws.com/1689074435315_barber.jpeg',
		subCategoryServices: [
			{
				id: 1,
				name: 'Стрижка мужская',
				serviceResponses: [
					{
						id: 1,
						name: 'Стрижка волос',
						price: 800,
						duration: 60,
					},
				],
			},
			{
				id: 2,
				name: 'Стрижка мужская',
				serviceResponses: [
					{
						id: 3,
						name: 'Стрижка волос',
						price: 800,
						duration: 59,
					},
					{
						id: 2,
						name: 'Стрижка future',
						price: 800,
						duration: 40,
					},
				],
			},
		],
	},
	{
		id: 4,
		name: 'Педикюр',
		icon: 'https://ak-soft.s3.eu-central-1.amazonaws.com/string',
		subCategoryServices: [
			{
				id: 3,
				name: 'SucCategorye',
				serviceResponses: [
					{
						id: 5,
						name: 'лак',
						price: 23,
						duration: 21,
					},
					{
						id: 4,
						name: 'string',
						price: 23,
						duration: 21,
					},
				],
			},
		],
	},
]

export const ServicesBranchBeauty = () => {
	const { beautySalonID } = useParams()
	const { branchData } = useSelector((state: any) => state.branch)
	const { serviceData } = useSelector((state: any) => state.service)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getServices(beautySalonID) as unknown as AnyAction)
	}, [beautySalonID, dispatch])

	return (
		<Container>
			<div className={styles.wrapper}>
				<div className={styles.wrapper_title}>
					<h1 className={styles.title}>• Услуги •</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur. Eu quis enim tempor et proin
						neque.
					</p>
				</div>
				<div className={styles.wrapper_services_and_time}>
					<div className={styles.wrapper_services}>
						{serviceData ? (
							<AccordionUi
								data={data}
								branchData={branchData}
								backgroundColor="#eeeeee"
							/>
						) : (
							'Empty'
						)}
					</div>
					<div className={styles.wrapper_shares}>
						<p className={styles.p}>Контакты & График работы</p>
						<span className={styles.divider}></span>
						<div className={styles.contact}>
							<div className={styles.wrapper_contact}>
								<IoPhonePortraitOutline size={20} />
								+996 (550) 75-55-95
							</div>
							<button className={styles.btn}>
								<a href={`tel:+996550755595`} style={{ color: '#33a011' }}>
									Позвонить
								</a>
							</button>
						</div>
						<span className={styles.divider}></span>
						<ul className={styles.ul}>
							<li className={styles.li}>
								<span className={styles.week}>Понедельник</span>
								<span className={styles.hour}>13:00 16:00</span>
							</li>
							<li className={styles.li}>
								<span className={styles.week}>Вторник</span>
								<span className={styles.hour}>
									10:00 13:00 <br /> 14:30 19:00
								</span>
							</li>
							<li className={styles.li}>
								<span className={styles.week}>Среда</span>
								<span className={styles.hour}>
									10:00 13:00 <br /> 14:30 19:00
								</span>
							</li>
							<li className={styles.li}>
								<span className={styles.week}>Четверг</span>
								<span className={styles.hour}>
									10:00 13:00 <br /> 14:30 19:00
								</span>
							</li>
							<li className={styles.li}>
								<span className={styles.week}>Пятница</span>
								<span className={styles.hour}>
									10:00 13:00 <br /> 14:30 19:00
								</span>
							</li>
							<li className={styles.li}>
								<span className={styles.week}>Суббота</span>
								<span className={styles.hour}>
									10:00 13:00 <br /> 14:30 19:00
								</span>
							</li>
							<li className={styles.li}>
								<span className={styles.week}>Воскресенье</span>
								<span className={styles.hour}>
									10:00 13:00 <br /> 14:30 19:00
								</span>
							</li>
						</ul>
						<span className={styles.divider}></span>
						<span className={styles.location_title}>Местоположение</span>
						<div className={styles.location}>Место для карты</div>
					</div>
				</div>
			</div>
		</Container>
	)
}
