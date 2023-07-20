import React, { useState, useEffect } from 'react'
import styles from './ServicesBranch.module.css'
import { Container } from '../../../../styles/ContainerStyle/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { AnyAction } from '@reduxjs/toolkit'
import { AccordionUi } from '../../../../components/UI/Accordion/AccordionUi'
import { useDispatch, useSelector } from 'react-redux'
import { getServices } from '../../../../store/features/service-slice'
import { useParams } from 'react-router-dom'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { IoPhonePortraitOutline } from 'react-icons/io5'

interface TabPanelProps {
	children?: React.ReactNode
	index: number
	value: number
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			className={styles.tab_content}
			{...other}
		>
			{value === index && (
				<Box sx={{ padding: '0 2rem' }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	)
}

function a11yProps(index: number) {
	return {
		id: `vertical-tab-${index}`,
		'aria-controls': `vertical-tabpanel-${index}`,
	}
}

export const ServicesBranchContent = () => {
	const params = useParams()
	const { branchData } = useSelector((state: any) => state.branch)
	const { serviceData } = useSelector((state: any) => state.service)

	const [value, setValue] = useState(0)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getServices(params.branchId) as unknown as AnyAction)
	}, [params.branchId, dispatch])

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue)
	}

	console.log(serviceData)
	console.log(branchData)

	return (
		<Container
			sx={{
				padding: '3rem 0',
			}}
		>
			<div className={styles.wrapper}>
				<div className={styles.wrapper_services}>
					<div className={styles.wrapper_services_header}>
						<div className={styles.wrapper_title}>
							<h1>• УСЛУГИ •</h1>
						</div>
						<div className={styles.wrapper_search_input}>
							<FaMagnifyingGlass />
							<input
								className={styles.search_input}
								placeholder="Search services..."
							/>
						</div>
					</div>

					<div className={styles.wrapper_accardion}>
						<div className={styles.wrapper_popular_services}>
							<p className="title" style={{ color: '#d9d9d9' }}>
								Популярные
							</p>
							<AccordionUi
								data={serviceData}
								branchData={branchData}
								backgroundColor="#d9d9d9"
							/>
						</div>
						<div className={styles.wrapper_popular_services}>
							<p className="title" style={{ color: '#d9d9d9' }}>
								Другие
							</p>
							<AccordionUi
								data={serviceData}
								branchData={branchData}
								backgroundColor="#d9d9d9"
							/>
						</div>
					</div>
				</div>
				<div className={styles.wrapper_shares}>
					<p className={styles.p}>Контакты & График работы</p>
					<span className={styles.divider}></span>
					<div className={styles.contact}>
						<IoPhonePortraitOutline size={20} />
						+996 (550) 75-55-95
						<button className={styles.btn}>Позвонить</button>
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
		</Container>
	)
}
