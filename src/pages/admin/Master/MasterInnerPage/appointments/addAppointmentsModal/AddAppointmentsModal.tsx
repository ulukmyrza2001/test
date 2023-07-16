import styles from './AddAppoinments.module.css'
import { ModalComponent } from '../../../../../../components/UI/Modal/Modal'
import { Input } from '../../../../../../components/UI/Inputs/Input/Input'
import { MultiSelect } from '../../../../../../components/UI/Selects/MultiSelect/MultiSelect'
import { DataPicker } from '../../../../../../components/UI/DataPicker/DataPicker'
import { BasicTimePicker } from '../../../../../../components/UI/TimePickers/BasicTimePicker/BasicTimePicker'
import { LonelySelect } from '../../../../../../components/UI/Selects/LonelySelect/LonelySelect'
import { Button } from '../../../../../../components/UI/Buttons/Button/Button'

interface AddAppoinmentsModalProps {
	active: boolean
	setAppointmentCalendarModal: (modalState: {
		create: boolean
		update: boolean
	}) => void
}

export const AddAppoinmentsModal = ({
	active,
	setAppointmentCalendarModal,
}: AddAppoinmentsModalProps) => {
	function handleClose() {
		setAppointmentCalendarModal({
			create: false,
			update: false,
		})
	}
	return (
		<ModalComponent
			active={active}
			handleClose={handleClose}
			title='Master'>
			<div className={styles.container_appoinment}>
				<div className={styles.container}>
					<div className={styles.wrapper}>
						<LonelySelect
							value={null}
							options={[]}
							onChange={() => console.log()}
							isClearable={true}
							isDisabled={false}
							isLoading={false}
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
							isLoading={false}
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
						width='90px'
						backgroundColor='white'
						color='#acacac'
						border='1px solid #acacac'>
						Отмена
					</Button>
					<Button width='150px'>Сохранить</Button>
				</div>
			</div>
		</ModalComponent>
	)
}
