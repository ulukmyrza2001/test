import styles from './AddAppoinments.module.css'
import { ModalComponent } from '../../../../components/UI/Modal/Modal'

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
			<div>IN PROGRESS</div>
		</ModalComponent>
	)
}
