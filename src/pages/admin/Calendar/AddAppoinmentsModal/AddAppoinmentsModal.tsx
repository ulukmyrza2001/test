import { useState } from 'react'
import styles from './AddAppoinments.module.css'
import { ModalComponent } from '../../../../components/UI/Modal/Modal'
import { Input } from '../../../../components/UI/Inputs/Input/Input'
import { MultiSelect } from '../../../../components/UI/Selects/MultiSelect/MultiSelect'
import { DataPicker } from '../../../../components/UI/DataPicker/DataPicker'
import { BasicTimePicker } from '../../../../components/UI/TimePickers/BasicTimePicker/BasicTimePicker'
import { LonelySelect } from '../../../../components/UI/Selects/LonelySelect/LonelySelect'
import { Button } from '../../../../components/UI/Buttons/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { getMasterServices } from '../../../../store/features/master-slice'
import { AnyAction } from '@reduxjs/toolkit'
import {
	calculateEndTime,
	translateObject,
} from '../../../../utils/helpers/helpers'
import { APPOINTMENT_STATUS } from '../../../../utils/constants/constants'
import { getFreeTimeScheduler } from '../../../../store/features/schedule-slice'

interface AddAppoinmentsModalProps {
	active: boolean
	setAppointmentsCalendarData: any
	appointmentsCalendarData: {
		masterId: { label: string; value: string | number } | null
		serviceIds:
			| {
					label: string | number
					value: number
					duration: number
			  }[]
			| []
		appointmentStatus: { label: string; value: string | number } | null
		startDate: string
		startTime: string
		endTime: string
		description: string
	}
	setAppointmentCalendarModal: (modalState: {
		create: boolean
		update: boolean
	}) => void
}

interface dataMasterProps {
	id: number
	firstName: string
	lastName: string
	phoneNumber: string
	avatar: string
}

interface MasterService {
	label: string | number
	value: number
	duration: number
}

export const AddAppoinmentsModal = ({
	active,
	setAppointmentCalendarModal,
	appointmentsCalendarData,
	setAppointmentsCalendarData,
}: AddAppoinmentsModalProps) => {
	const { dataMaster, isLoadingMaster, dataMasterServices } = useSelector(
		(state: any) => state.master,
	)
	const { freeTimeMaster } = useSelector((state: any) => state.schedule)

	const [masterFreeTimeData, setMasterFreeTime] = useState(freeTimeMaster)

	const dispatch = useDispatch()

	function handleClose() {
		setAppointmentCalendarModal({
			create: false,
			update: false,
		})
		setAppointmentsCalendarData({
			masterId: null,
			serviceIds: [],
			appointmentStatus: null,
			startDate: '',
			startTime: '',
			endTime: '',
			description: '',
		})
	}

	function handleChangeMaster(value: string, type: string) {
		if (type === 'master') {
			setAppointmentsCalendarData({
				...appointmentsCalendarData,
				masterId: value,
				serviceIds: [],
			})
			dispatch(
				getMasterServices({
					masterId: translateObject(value),
				}) as unknown as AnyAction,
			)
			dispatch(
				getFreeTimeScheduler({
					masterID: translateObject(value),
					startDate: appointmentsCalendarData.startDate,
				}) as unknown as AnyAction,
			).then((res: any) => {
				try {
					setMasterFreeTime(res.payload)
				} catch (error) {}
			})
		} else {
			setAppointmentsCalendarData({
				...appointmentsCalendarData,
				startDate: value,
			})
			dispatch(
				getFreeTimeScheduler({
					masterID: translateObject(
						appointmentsCalendarData.masterId,
					),
					startDate: value,
				}) as unknown as AnyAction,
			).then((res: any) => {
				try {
					setMasterFreeTime(res.payload)
				} catch (error) {}
			})
		}
	}

	function handleChangeMasterServices(value: {
		reduce: any
		label: string | number
		value: number
		duration: number
	}) {
		const fullDuration = value.reduce(
			(acc: number, item: MasterService) => {
				return acc + item.duration
			},
			0,
		)
		const endTime = calculateEndTime(
			appointmentsCalendarData.startTime,
			fullDuration,
		)

		setAppointmentsCalendarData({
			...appointmentsCalendarData,
			serviceIds: value,
			endTime: endTime,
		})
	}

	const lastArrays = dataMasterServices.map((item: any) =>
		item.subCategoryServices.map((el: any) => {
			const lastResponse =
				el.serviceResponses[el.serviceResponses.length - 1]
			const hours = Math.floor(lastResponse.duration / 60)
			const minutes = lastResponse.duration % 60
			let time = ''
			if (hours === 0) {
				time = `${minutes} мин`
			} else {
				const formattedHours = hours.toString().padStart(2, '0')
				const formattedMinutes = minutes.toString().padStart(2, '0')
				time = `${formattedHours}:${formattedMinutes}`
			}
			return {
				label: `${lastResponse.name} ${time}`,
				value: lastResponse.id,
				duration: lastResponse.duration,
			}
		}),
	)

	return (
		<ModalComponent
			active={active}
			handleClose={handleClose}
			title='Новый визит'>
			<div className={styles.container_appoinment}>
				<div className={styles.container}>
					<div className={styles.wrapper}>
						<LonelySelect
							value={appointmentsCalendarData.masterId}
							options={dataMaster?.map(
								(item: dataMasterProps) => {
									return {
										value: item.id,
										label: `${item.firstName} ${item.lastName}`,
									}
								},
							)}
							onChange={(e) => handleChangeMaster(e, 'master')}
							isClearable={true}
							isLoading={isLoadingMaster}
							noOptionsMessage={() => 'Нет мастера'}
							placeholder='Мастеры'
							label='Мастеры'
						/>
					</div>
					<div className={styles.wrapper}>
						<MultiSelect
							label='Услуги'
							options={lastArrays.flat()}
							placeholder={'Услуги'}
							noOptionsMessage={() => 'Нет услуги'}
							value={appointmentsCalendarData.serviceIds}
							onChange={(e) => handleChangeMasterServices(e)}
							isLoading={isLoadingMaster}
							isClearable={true}
						/>
					</div>
				</div>
				<div className={styles.container}>
					<div style={{ width: '200px' }}>
						<DataPicker
							value={appointmentsCalendarData.startDate}
							onChange={(e: string) =>
								handleChangeMaster(e, 'date')
							}
						/>
					</div>
					<div className={styles.wrapper}>
						<BasicTimePicker
							value={appointmentsCalendarData.startTime}
							onChange={(e) => {
								return e
							}}
							label='Начало'
							disabled={true}
						/>
					</div>
					<div className={styles.wrapper}>
						<BasicTimePicker
							value={appointmentsCalendarData.endTime}
							onChange={(e) => {
								return e
							}}
							label='Конец'
							disabled={true}
						/>
					</div>
				</div>
				<div className={styles.container_schedulers}>
					{masterFreeTimeData?.length !== 0 ? (
						<div className={styles.container_scheduler}>
							{masterFreeTimeData?.map(
								(item: {
									startTime: string
									endTime: string
								}) => {
									const [hours, minutes] =
										item.startTime.split(':')
									return (
										<div
											key={item.startTime}
											onClick={() =>
												setAppointmentsCalendarData({
													...appointmentsCalendarData,
													startTime: item.startTime,
												})
											}
											className={
												item.startTime ===
												appointmentsCalendarData.startTime
													? styles.card_free_time_active
													: styles.card_free_time
											}>{`${hours}:${minutes}`}</div>
									)
								},
							)}
						</div>
					) : (
						<div className={styles.container_message}>
							Выберите Доктора
						</div>
					)}
				</div>
				<div className={styles.container}>
					<div className={styles.wrapper}>
						<Input
							value={appointmentsCalendarData.description}
							onChange={(e) =>
								setAppointmentsCalendarData({
									...appointmentsCalendarData,
									description: e.target.value,
								})
							}
							label='Комментарий'
							placeholder='Комментарий'
						/>
					</div>
					<div>
						<LonelySelect
							value={appointmentsCalendarData.appointmentStatus}
							options={APPOINTMENT_STATUS}
							onChange={(e) =>
								setAppointmentsCalendarData({
									...appointmentsCalendarData,
									appointmentStatus: e,
								})
							}
							isClearable={false}
							isDisabled={false}
							isLoading={false}
							noOptionsMessage={() => ''}
							placeholder='Статус'
							label='Статус'
						/>
					</div>
				</div>
				<div className={styles.container_button}>
					<Button
						width='120px'
						backgroundColor='white'
						color='#acacac'
						border='1px solid #acacac'
						onClick={() => handleClose()}>
						Отмена
					</Button>
					<Button width='150px'>Сохранить</Button>
				</div>
			</div>
		</ModalComponent>
	)
}
