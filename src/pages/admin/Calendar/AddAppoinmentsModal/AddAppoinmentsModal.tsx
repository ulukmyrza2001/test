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
import { translateObject } from '../../../../utils/helpers/helpers'
import { APPOINTMENT_STATUS } from '../../../../utils/constants/constants'

interface AddAppoinmentsModalProps {
	active: boolean
	setAppointmentsCalendarData: any
	appointmentsCalendarData: {
		masterId: { label: string; value: string | number } | null
		serviceIds: number[] | []
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

export const AddAppoinmentsModal = ({
	active,
	setAppointmentCalendarModal,
	appointmentsCalendarData,
	setAppointmentsCalendarData,
}: AddAppoinmentsModalProps) => {
	const { dataMaster, isLoadingMaster, dataMasterServices } = useSelector(
		(state: any) => state.master,
	)

	const dispatch = useDispatch()

	function handleClose() {
		setAppointmentCalendarModal({
			create: false,
			update: false,
		})
	}

	function handleChangeMaster(value: string) {
		setAppointmentsCalendarData({
			...appointmentsCalendarData,
			masterId: value,
		})
		dispatch(
			getMasterServices({
				masterId: translateObject(value),
			}) as unknown as AnyAction,
		)
	}

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
							onChange={(e) => handleChangeMaster(e)}
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
							options={[]}
							placeholder={'Услуги'}
							noOptionsMessage={() => 'Нет услуги'}
							value={[]}
							onChange={(e: any) => console.log(e)}
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
								setAppointmentsCalendarData({
									...appointmentsCalendarData,
									startDate: e,
								})
							}
						/>
					</div>
					<div className={styles.wrapper}>
						<BasicTimePicker
							value='09:00'
							onChange={(e) => console.log(e)}
							label='Начало'
							disabled={true}
						/>
					</div>
					<div className={styles.wrapper}>
						<BasicTimePicker
							value='09:00'
							onChange={(e) => console.log(e)}
							label='Конец'
							disabled={true}
						/>
					</div>
				</div>
				<div className={styles.container}>
					<div className={styles.container_message}>
						Выберите Доктора
					</div>
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
