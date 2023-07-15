import styles from './AddAppoinments.module.css'
import { ModalComponent } from '../../../../components/UI/Modal/Modal'
import { Input } from '../../../../components/UI/Inputs/Input/Input'
import { MultiSelect } from '../../../../components/UI/Selects/MultiSelect/MultiSelect'
import { DataPicker } from '../../../../components/UI/DataPicker/DataPicker'

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
			title='Новый визит'>
			<div className={styles.container_appoinment}>
				<div className={styles.container}>
					<div className={styles.wrapper}>
						<Input label='Мастер' placeholder='Мастер' />
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
					<div className={styles.wrapper}>
						<DataPicker value={''} onChange={() => ''} />
					</div>
					<div className={styles.wrapper}>
						<span>Hello</span>
					</div>
					<div className={styles.wrapper}>
						<span>Hello</span>
					</div>
				</div>
			</div>
		</ModalComponent>
	)
}
