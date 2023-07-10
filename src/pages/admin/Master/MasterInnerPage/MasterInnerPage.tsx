import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Outlet } from 'react-router-dom'
import { BreadCrumbs } from '../../../../components/UI/BreadCrumbs/BreadCrumbs'
import { Button } from '../../../../components/UI/Buttons/Button/Button'
import { getMasterById } from '../../../../store/features/master-slice'
import { useDispatch, useSelector } from 'react-redux'
import { AnyAction } from 'redux'
import { Skeleton } from '@mui/material'
import styles from './MasterInnerPage.module.css'
import NotUser from '../../../../assets/image/noUser.svg'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { Tabs } from '../../../../components/UI/Tabs/Tabs'

interface DateItem {
	number: number
	dayOfWeek: string
}

export const MasterInnerPage = () => {
	const { dataMasterById, isLoadingMaster } = useSelector(
		(state: any) => state.master,
	)

	const [startDate, setStartDate] = useState('2023-07-03')
	const [endDate, setEndDate] = useState('2023-07-09')
	const [startTime, setStartTime] = useState('08:00:00')
	const [endTime, setEndTime] = useState('23:00:00')
	const [datesArray, setDatesArray] = useState<DateItem[]>([])

	const { masterID } = useParams()
	const dispatch = useDispatch()

	//useEffect

	useEffect(() => {
		dispatch(getMasterById({ masterID }) as unknown as AnyAction)
	}, [])

	useEffect(() => {
		const start = new Date(startDate)
		const end = new Date(endDate)

		const newDatesArray: DateItem[] = []

		while (start <= end) {
			const dayNumber = start.getDate()
			const dayName = getDayName(start.getDay())

			newDatesArray.push({
				number: dayNumber,
				dayOfWeek: dayName,
			})

			start.setDate(start.getDate() + 1)
		}

		setDatesArray(newDatesArray)
	}, [startDate, endDate])

	//function

	function nextWeek() {
		const currentStartDate = new Date(startDate)
		const currentEndDate = new Date(endDate)

		const nextStartDate = new Date(
			currentStartDate.getTime() + 7 * 24 * 60 * 60 * 1000,
		)
		const nextEndDate = new Date(
			currentEndDate.getTime() + 7 * 24 * 60 * 60 * 1000,
		)

		setStartDate(nextStartDate.toISOString().split('T')[0])
		setEndDate(nextEndDate.toISOString().split('T')[0])
	}

	function prevWeek() {
		const currentStartDate = new Date(startDate)
		const currentEndDate = new Date(endDate)

		const prevStartDate = new Date(
			currentStartDate.getTime() - 7 * 24 * 60 * 60 * 1000,
		)
		const prevEndDate = new Date(
			currentEndDate.getTime() - 7 * 24 * 60 * 60 * 1000,
		)

		setStartDate(prevStartDate.toISOString().split('T')[0])
		setEndDate(prevEndDate.toISOString().split('T')[0])
	}

	function getDayName(dayIndex: number): string {
		const daysOfWeek = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
		return daysOfWeek[dayIndex]
	}

	function generateTimeArray() {
		const start = new Date(`2000-01-01T${startTime}`)
		const end = new Date(`2000-01-01T${endTime}`)
		const timeArray = []

		while (start <= end) {
			const hour = start.getHours().toString().padStart(2, '0')
			const minute = start.getMinutes().toString().padStart(2, '0')
			timeArray.push(`${hour}:${minute}`)
			start.setHours(start.getHours() + 1)
		}

		return timeArray
	}

	const timeArray = generateTimeArray()

	//const

	const BREAD_CRUMBS_MASTER = [
		{
			name: 'Мастеры',
			to: '/masters',
			path: 1,
		},
		{
			name: 'Мастер',
			to: '/master',
			path: 2,
		},
	]

	const TabsValue = [
		{
			value: 'Записи',
			to: 'appoinments',
		},
		{
			value: 'Отзывы',
			to: 'rewievs',
		},
	]

	return (
		<div className={styles.container_master_inner_page}>
			<div className={styles.container_master_inner_header}>
				<BreadCrumbs paths={BREAD_CRUMBS_MASTER} />
				<Button width='235px' onClick={() => console.log('abu')}>
					Редактировать мастер
				</Button>
			</div>
			<div className={styles.container_main_master_inner_page}>
				<div className={styles.container_master_main_avatar}>
					<div className={styles.container_master_avatar}>
						<img
							className={styles.container_master_image}
							src={NotUser}
							alt='No user'
						/>
					</div>
					<div className={styles.container_master_card_info}>
						<div className={styles.master_fullname_title}>
							{isLoadingMaster ? (
								<Skeleton
									variant='rectangular'
									width={200}
									sx={{ borderRadius: '6px' }}
								/>
							) : (
								`${dataMasterById?.firstName}
							${dataMasterById?.lastName}`
							)}
						</div>
						<span>
							{isLoadingMaster ? (
								<Skeleton
									variant='rectangular'
									width={140}
									sx={{ borderRadius: '6px' }}
								/>
							) : (
								dataMasterById?.phoneNumber
							)}
						</span>
					</div>
					<div className={styles.master_schedule_datepicker}>
						<div>
							<MdKeyboardArrowLeft
								onClick={() => prevWeek()}
								size={20}
								cursor='pointer'
							/>
						</div>
						<div>{`${startDate} - ${endDate}`}</div>
						<div>
							<MdKeyboardArrowRight
								onClick={() => nextWeek()}
								size={20}
								cursor='pointer'
							/>
						</div>
					</div>
				</div>
				<div className={styles.container_master_shedule_typeone_active}>
					<div className={styles.container_schedule_typeone}>
						<div
							className={
								styles.container_schedule_typeone_dayofweek
							}>
							{datesArray.map(
								(item: {
									number: number
									dayOfWeek: string
								}) => {
									return (
										<div
											key={item.number}
											className={
												styles.container_schedule_card
											}>
											<div>{item.number}</div>
											<div>{item.dayOfWeek}</div>
										</div>
									)
								},
							)}
						</div>
						<div className={styles.on_the_right_container}>
							{datesArray.map(
								(item: {
									number: number
									dayOfWeek: string
								}) => {
									return (
										<div
											key={item.number}
											className={
												styles.schedules_insides_container
											}>
											{timeArray.map(
												(
													item: string,
													index: number,
												) => {
													return (
														<div
															style={{
																backgroundColor:
																	item >=
																		'12:00' &&
																	item <=
																		'16:00'
																		? ' #33a011'
																		: '#acacac',
															}}
															key={index + 1}
															className={
																styles.schedules_inside_card
															}></div>
													)
												},
											)}
										</div>
									)
								},
							)}
							<div
								className={
									styles.container_schedule_typetwo_timeofweek
								}>
								{timeArray.map(
									(item: string, index: number) => {
										return (
											<div
												key={index + 1}
												className={
													styles.container_schedule_bottom_card
												}>
												{item}
											</div>
										)
									},
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div>
				<Tabs TabsValue={TabsValue} />
				<Outlet />
			</div>
		</div>
	)
}
