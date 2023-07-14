import { useState } from 'react'
import { DataPicker } from '../../../../../../components/UI/DataPicker/DataPicker'
import { ModalComponent } from '../../../../../../components/UI/Modal/Modal'
import { FULL_WEEK } from '../../../../../../utils/constants/constants'
import styles from './AddFullSchedule.module.css'
import dayjs from 'dayjs'
import BasicTimePicker from '../../../../../../components/UI/TimePicker/TimePicker'
import { Switch } from '../../../../../../components/UI/Switch/Switch'
import { Button } from '../../../../../../components/UI/Buttons/Button/Button'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { postMasterSchedule } from '../../../../../../store/features/schedule-slice'
import { AnyAction } from '@reduxjs/toolkit'

interface AddFullScheduleProps {
	masterScheduleModal: boolean
	setMasterScheduleModal: (active: boolean) => void
	startWeek: string
}

export const AddFullSchedule = ({
	masterScheduleModal,
	setMasterScheduleModal,
	startWeek,
}: AddFullScheduleProps) => {
	const [scheduleData, setScheduleData] = useState({
		startDate: dayjs(new Date()).format('YYYY-MM-DD'),
		endDate: '',
		dayScheduleRequests: [
			{
				startTime: '',
				endTime: '',
				dayOfWeek: 'MONDAY',
				workingDay: false,
			},
			{
				startTime: '',
				endTime: '',
				dayOfWeek: 'TUESDAY',
				workingDay: false,
			},
			{
				startTime: '',
				endTime: '',
				dayOfWeek: 'WEDNESDAY',
				workingDay: false,
			},
			{
				startTime: '',
				endTime: '',
				dayOfWeek: 'THURSDAY',
				workingDay: false,
			},
			{
				startTime: '',
				endTime: '',
				dayOfWeek: 'FRIDAY',
				workingDay: false,
			},
			{
				startTime: '',
				endTime: '',
				dayOfWeek: 'SATURDAY',
				workingDay: false,
			},
			{
				startTime: '',
				endTime: '',
				dayOfWeek: 'SUNDAY',
				workingDay: false,
			},
		],
	})

<<<<<<< HEAD
	return (
		<ModalComponent
			active={true}
			handleClose={() => false}
			title='Создать график'
		>
=======
	const dispatch = useDispatch()
	const { masterID } = useParams()

	function handlePost() {
		dispatch(
			postMasterSchedule({
				masterID,
				scheduleData,
				startWeek,
			}) as unknown as AnyAction,
		)
		handleClose()
	}

	function handleClose() {
		setMasterScheduleModal(false)
		setScheduleData({
			startDate: dayjs(new Date()).format('YYYY-MM-DD'),
			endDate: '',
			dayScheduleRequests: [
				{
					startTime: '',
					endTime: '',
					dayOfWeek: 'MONDAY',
					workingDay: false,
				},
				{
					startTime: '',
					endTime: '',
					dayOfWeek: 'TUESDAY',
					workingDay: false,
				},
				{
					startTime: '',
					endTime: '',
					dayOfWeek: 'WEDNESDAY',
					workingDay: false,
				},
				{
					startTime: '',
					endTime: '',
					dayOfWeek: 'THURSDAY',
					workingDay: false,
				},
				{
					startTime: '',
					endTime: '',
					dayOfWeek: 'FRIDAY',
					workingDay: false,
				},
				{
					startTime: '',
					endTime: '',
					dayOfWeek: 'SATURDAY',
					workingDay: false,
				},
				{
					startTime: '',
					endTime: '',
					dayOfWeek: 'SUNDAY',
					workingDay: false,
				},
			],
		})
	}

	function handleChangeStartTime(index: number, value: string) {
		const updatedDayScheduleRequests = [...scheduleData.dayScheduleRequests]
		updatedDayScheduleRequests[index] = {
			...updatedDayScheduleRequests[index],
			startTime: value,
		}
		setScheduleData({
			...scheduleData,
			dayScheduleRequests: updatedDayScheduleRequests,
		})
	}

	function handleChangeEndTime(index: number, value: string) {
		const updatedDayScheduleRequests = [...scheduleData.dayScheduleRequests]
		updatedDayScheduleRequests[index] = {
			...updatedDayScheduleRequests[index],
			endTime: value,
		}
		setScheduleData({
			...scheduleData,
			dayScheduleRequests: updatedDayScheduleRequests,
		})
	}

	function handleChangeWorkingDay(index: number, checked: boolean) {
		const updatedDayScheduleRequests = [...scheduleData.dayScheduleRequests]
		updatedDayScheduleRequests[index] = {
			...updatedDayScheduleRequests[index],
			workingDay: checked,
		}
		setScheduleData({
			...scheduleData,
			dayScheduleRequests: updatedDayScheduleRequests,
		})
	}

	return (
		<ModalComponent
			active={masterScheduleModal}
			handleClose={() => handleClose()}
			title='Создать график'>
>>>>>>> 1bea2fc151188197e47bfcafa4e483f32104fdbc
			<div className={styles.container_full_schedule}>
				<div className={styles.container_full_schedule_header}>
					<DataPicker
						value={scheduleData.startDate}
						onChange={(e: string) =>
							setScheduleData({
								...scheduleData,
								startDate: e,
							})
						}
					/>
					<DataPicker
						value={scheduleData.endDate}
						onChange={(e: string) =>
							setScheduleData({
								...scheduleData,
								endDate: e,
							})
						}
					/>
				</div>
<<<<<<< HEAD
				{FULL_WEEK.map((item: { nameEN: string; nameRU: string }) => {
					return (
						<div
							key={item.nameRU}
							className={styles.card_full_schedule}
						>
							<Switch
								checked={true}
								onChange={(e) => console.log(e)}
							/>
							<span>{item.nameRU}</span>
							<BasicTimePicker
								value={''}
								onChange={(e) => console.log(e)}
								minHours={0}
								maxHours={23}
								minutesStep={30}
							/>
							<BasicTimePicker
								value={''}
								onChange={(e) => console.log(e)}
								minHours={0}
								maxHours={23}
								minutesStep={30}
							/>
						</div>
					)
				})}
=======
				{FULL_WEEK.map(
					(
						item: { nameEN: string; nameRU: string },
						index: number,
					) => {
						return (
							<div
								key={item.nameRU}
								className={styles.card_full_schedule}>
								<Switch
									checked={
										scheduleData.dayScheduleRequests[index]
											.workingDay
									}
									onChange={(e) =>
										handleChangeWorkingDay(
											index,
											e.target.checked,
										)
									}
								/>
								<span>{item.nameRU}</span>
								<div className={styles.container_time_picker}>
									<BasicTimePicker
										value={
											scheduleData.dayScheduleRequests[
												index
											].startTime
										}
										onChange={(e) =>
											handleChangeStartTime(index, e)
										}
										minHours={0}
										maxHours={23}
										minutesStep={30}
										disabled={
											!scheduleData.dayScheduleRequests[
												index
											].workingDay
										}
									/>
									<BasicTimePicker
										value={
											scheduleData.dayScheduleRequests[
												index
											].endTime
										}
										onChange={(e) =>
											handleChangeEndTime(index, e)
										}
										minHours={0}
										maxHours={23}
										minutesStep={30}
										disabled={
											!scheduleData.dayScheduleRequests[
												index
											].workingDay
										}
									/>
								</div>
							</div>
						)
					},
				)}
>>>>>>> 1bea2fc151188197e47bfcafa4e483f32104fdbc
				<div className={styles.container_full_schedule_footer}>
					<div>
						<Button
							width='80px'
							backgroundColor='white'
							color='#acacac'
							border='1px solid #acacac'>
							Отмена
						</Button>
					</div>
					<div>
						<Button width='157px'>Применить к всем</Button>
					</div>
					<div>
						<Button width='90px' onClick={() => handlePost()}>
							Сохранить
						</Button>
					</div>
				</div>
			</div>
		</ModalComponent>
	)
}
