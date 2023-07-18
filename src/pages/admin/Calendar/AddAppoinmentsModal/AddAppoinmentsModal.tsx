import { useEffect } from 'react'
import styles from './AddAppoinments.module.css'
import { ModalComponent } from '../../../../components/UI/Modal/Modal'
import { Input } from '../../../../components/UI/Inputs/Input/Input'
import { MultiSelect } from '../../../../components/UI/Selects/MultiSelect/MultiSelect'
import { DataPicker } from '../../../../components/UI/DataPicker/DataPicker'
import { BasicTimePicker } from '../../../../components/UI/TimePickers/BasicTimePicker/BasicTimePicker'
import { LonelySelect } from '../../../../components/UI/Selects/LonelySelect/LonelySelect'
import { Button } from '../../../../components/UI/Buttons/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import {
	getMaster,
	getMasterServices,
} from '../../../../store/features/master-slice'
import { AnyAction } from '@reduxjs/toolkit'
import {
	filterArrayThroughIDBeforeArray,
	translateObject,
} from '../../../../utils/helpers/helpers'

interface AddAppoinmentsModalProps {
	active: boolean
	setAppointmentsCalendarData: any
	appointmentsCalendarData: {
		masterId: number
		serviceIds: number[] | []
		appointmentStatus: string
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

	useEffect(() => {
		dispatch(getMaster() as unknown as AnyAction)
	}, [])

	function handleClose() {
		setAppointmentCalendarModal({
			create: false,
			update: false,
		})
	}

	function handleChangeMaster(value: string) {
		setAppointmentsCalendarData({
			...appointmentsCalendarData,
			masterId: translateObject(value),
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
							value={filterArrayThroughIDBeforeArray(
								dataMaster,
								appointmentsCalendarData.masterId,
								'id',
								'firstName-lastName',
							)}
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
							isDisabled={false}
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
							isDisabled={false}
						/>
					</div>
				</div>
				<div className={styles.container}>
					<div style={{ width: '200px' }}>
						<DataPicker value={''} onChange={() => ''} />
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
						<Input label='Комментарий' placeholder='Комментарий' />
					</div>
					<div>
						<LonelySelect
							value={null}
							options={[]}
							onChange={() => console.log()}
							isClearable={true}
							isDisabled={false}
							isLoading={false}
							noOptionsMessage={() => 'Нет мастера'}
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
