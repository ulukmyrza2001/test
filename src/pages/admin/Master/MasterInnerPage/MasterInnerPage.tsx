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
import { deleteMasterFullSchedule } from '../../../../store/features/schedule-slice'
import { AddFullSchedule } from './Schedule/AddFullSchedule/AddFullSchedule'
import { Schedule } from '../../../master/users/userInner/shedule'
import { AddAppoinmentsModal } from './appointments/addAppointmentsModal/AddAppointmentsModal'
import { MasterUpdateModal } from '../MasterPage/masterUpdateModal/MasterUpdateModal'

export const MasterInnerPage = () => {
	const { dataMasterById, isLoadingMaster } = useSelector(
		(state: any) => state.master
	)
	const { masterSchedule } = useSelector((state: any) => state.schedule)

	const [startDate, setStartDate] = useState(
		getMonday(new Date().toISOString().slice(0, 10))
	)
	const [endDate, setEndDate] = useState(
		getSunday(new Date().toISOString().slice(0, 10))
	)
	const [masterData, setMasterData] = useState({
		firstName: '',
		lastName: '',
		authInfoRequest: {
			phoneNumber: '+996',
			password: '',
		},
	})
	const [masterModal, setMasterModal] = useState({
		masterModalAdd: false,
		masterModalUpdate: false,
	})
	const [appointmentCalendarModal, setAppointmentCalendarModal] = useState({
		create: false,
		update: false,
	})
	const [masterScheduleModal, setMasterScheduleModal] = useState(false)

	const { masterID } = useParams()
	const dispatch = useDispatch()

	//useEffect

	useEffect(() => {
		dispatch(getMasterById({ masterID }) as unknown as AnyAction)
	}, [])

	//function

	function getMonday(date: string) {
		const inputDate = new Date(date)
		const dayOfWeek = inputDate.getDay()

		if (dayOfWeek === 1) {
			return inputDate.toISOString().slice(0, 10)
		} else {
			const monday = new Date(inputDate)
			monday.setDate(inputDate.getDate() - ((dayOfWeek + 7) % 7) + 1)
			return monday.toISOString().slice(0, 10)
		}
	}

	function getSunday(date: string) {
		const inputDate = new Date(date)
		const dayOfWeek = inputDate.getDay()
		if (dayOfWeek === 0) {
			return inputDate.toISOString().slice(0, 10)
		} else {
			const sunday = new Date(inputDate)
			const daysUntilNextSunday = 7 - dayOfWeek
			sunday.setDate(inputDate.getDate() + daysUntilNextSunday)
			return sunday.toISOString().slice(0, 10)
		}
	}

	function nextWeek() {
		const currentStartDate = new Date(startDate)
		const currentEndDate = new Date(endDate)

		const nextStartDate = new Date(
			currentStartDate.getTime() + 7 * 24 * 60 * 60 * 1000
		)
		const nextEndDate = new Date(
			currentEndDate.getTime() + 7 * 24 * 60 * 60 * 1000
		)

		setStartDate(nextStartDate.toISOString().split('T')[0])
		setEndDate(nextEndDate.toISOString().split('T')[0])
	}

	function prevWeek() {
		const currentStartDate = new Date(startDate)
		const currentEndDate = new Date(endDate)

		const prevStartDate = new Date(
			currentStartDate.getTime() - 7 * 24 * 60 * 60 * 1000
		)
		const prevEndDate = new Date(
			currentEndDate.getTime() - 7 * 24 * 60 * 60 * 1000
		)

		setStartDate(prevStartDate.toISOString().split('T')[0])
		setEndDate(prevEndDate.toISOString().split('T')[0])
	}

	function handleUpdate() {
		setMasterModal({
			masterModalAdd: false,
			masterModalUpdate: true,
		})
		setMasterData({
			firstName: dataMasterById.firstName,
			lastName: dataMasterById.lastName,
			authInfoRequest: {
				phoneNumber: dataMasterById.phoneNumber,
				password: '',
			},
		})
	}

	function handleDeleteSchedule() {
		dispatch(
			deleteMasterFullSchedule({
				scheduleId: masterSchedule.scheduleId,
				masterID,
				startWeek: startDate,
			}) as unknown as AnyAction
		)
	}

	function hasWorkingDayInRange(scheduleData: any) {
		if (scheduleData && typeof scheduleData[Symbol.iterator] === 'function') {
			for (const schedule of scheduleData) {
				const { workingDay } = schedule
				if (workingDay) {
					return true
				}
			}
		}
		return false
	}

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
			value: 'Визиты',
			to: 'appoinments',
		},
		{
			value: 'Отзывы',
			to: 'rewievs',
		},
	]

	return (
		<div className={styles.container_master_inner_page}>
			<MasterUpdateModal
				masterModal={masterModal}
				setMasterModal={setMasterModal}
				masterData={masterData}
				setMasterData={setMasterData}
				masterId={masterID}
			/>
			<AddAppoinmentsModal
				setAppointmentCalendarModal={setAppointmentCalendarModal}
				active={appointmentCalendarModal.create}
			/>
			<AddFullSchedule
				masterScheduleModal={masterScheduleModal}
				setMasterScheduleModal={setMasterScheduleModal}
				startWeek={startDate}
			/>
			<div className={styles.container_master_inner_header}>
				<BreadCrumbs paths={BREAD_CRUMBS_MASTER} />
				<div className={styles.container_master_header_left_box}>
					<Button
						backgroundColor="white"
						color="#acacac"
						border="1px solid #acacac"
						width="144px"
						display={
							hasWorkingDayInRange(masterSchedule?.dayScheduleResponses)
								? 'block'
								: 'none'
						}
						onClick={() => handleDeleteSchedule()}
					>
						Удалить график
					</Button>
					<Button width="143px" onClick={() => setMasterScheduleModal(true)}>
						Создать график
					</Button>
					<Button width="143px" onClick={() => setMasterScheduleModal(true)}>
						Создать график
					</Button>
					<Button
						onClick={() =>
							setAppointmentCalendarModal({
								create: true,
								update: false,
							})
						}
						width="150px"
					>
						Добавить визит
					</Button>
					<Button width="186px" onClick={() => handleUpdate()}>
						Редактировать мастер
					</Button>
				</div>
			</div>
			<div className={styles.container_main_master_inner_page}>
				<div className={styles.container_master_main_avatar}>
					<div className={styles.container_master_avatar}>
						<img
							className={styles.container_master_image}
							src={NotUser}
							alt="No user"
						/>
					</div>
					<div className={styles.container_master_card_info}>
						<div className={styles.master_fullname_title}>
							{isLoadingMaster ? (
								<Skeleton
									variant="rectangular"
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
									variant="rectangular"
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
								cursor="pointer"
							/>
						</div>
						<div>{`${startDate} - ${endDate}`}</div>
						<div>
							<MdKeyboardArrowRight
								onClick={() => nextWeek()}
								size={20}
								cursor="pointer"
							/>
						</div>
					</div>
				</div>
				<Schedule startWeek={startDate} />
			</div>
			<div>
				<Tabs TabsValue={TabsValue} />
				<Outlet />
			</div>
		</div>
	)
}
