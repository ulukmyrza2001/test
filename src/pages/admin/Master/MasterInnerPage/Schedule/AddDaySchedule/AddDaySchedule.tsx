import { ModalComponent } from '../../../../../../components/UI/Modal/Modal'
import BasicTimePicker from '../../../../../../components/UI/TimePicker/TimePicker'
import styles from './AddDaySchedule.module.css'
import { Button } from '../../../../../../components/UI/Buttons/Button/Button'
import { useDispatch } from 'react-redux'
import { putMasterSchedule } from '../../../../../../store/features/schedule-slice'
import { AnyAction } from '@reduxjs/toolkit'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

interface AddDayScheduleModalProps {
	dayScheduleActive: boolean
	setDayScheduleActive: (active: boolean) => void
	setDayScheduleData: any
	startWeek: string
	dayScheduleData: {
		daySchedulesId: number | undefined | string
		startTime: string
		endTime: string
	}
}

export const AddDaySchedule = ({
	dayScheduleActive,
	setDayScheduleActive,
	dayScheduleData,
	setDayScheduleData,
	startWeek,
}: AddDayScheduleModalProps) => {
	const [addDayScheduleValidation, setAddDayScheduleValidation] =
		useState(false)

	const dispatch = useDispatch()
	const { masterID } = useParams()

	function handleClose() {
		setDayScheduleActive(false)
		setDayScheduleData({
			...dayScheduleData,
			startTime: '',
			endTime: '',
		})
	}

	function handlePost() {
		dispatch(
			putMasterSchedule({
				daySchedulesId: dayScheduleData.daySchedulesId,
				daySchedulesData: dayScheduleData,
				masterID: masterID,
				startWeek: startWeek,
			}) as unknown as AnyAction,
		)
		setDayScheduleActive(false)
	}

	useEffect(() => {
		if (
			dayScheduleData.startTime !== '' &&
			dayScheduleData.endTime !== '' &&
			dayScheduleData.startTime.split(':')[0] <
				dayScheduleData.endTime.split(':')[0]
		) {
			setAddDayScheduleValidation(false)
		} else {
			setAddDayScheduleValidation(true)
		}
	}, [dayScheduleData.startTime, dayScheduleData.endTime])

	return (
		<ModalComponent
			active={dayScheduleActive}
			handleClose={handleClose}
			title='Редактировать время'>
			<div className={styles.container_modal}>
				<div className={styles.container_time}>
					<BasicTimePicker
						value={dayScheduleData.startTime}
						onChange={(e) =>
							setDayScheduleData({
								...dayScheduleData,
								startTime: e,
							})
						}
						minHours={0}
						maxHours={23}
						minutesStep={30}
					/>
					-
					<BasicTimePicker
						value={dayScheduleData.endTime}
						onChange={(e) =>
							setDayScheduleData({
								...dayScheduleData,
								endTime: e,
							})
						}
						minHours={0}
						maxHours={23}
						minutesStep={30}
					/>
				</div>
				<div className={styles.container_button}>
					<Button
						onClick={handleClose}
						width='80px'
						backgroundColor='white'
						color='#acacac'
						border='1px solid #acacac'>
						Отмена
					</Button>
					<Button
						disabled={addDayScheduleValidation}
						onClick={() => handlePost()}
						width='100px'>
						Сохранить
					</Button>
				</div>
			</div>
		</ModalComponent>
	)
}
