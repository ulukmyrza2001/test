import styles from './AddAppoinments.module.css'
import { ModalComponent } from '../../../../components/UI/Modal/Modal'

interface AddAppoinmentsModalProps {
	active: boolean
}

export const AddAppoinmentsModal = ({ active }: AddAppoinmentsModalProps) => {
	return (
		<ModalComponent
			active={active}
			handleClose={() => false}
			title='Новый визит'>
			<div>IN PROGRESS</div>
		</ModalComponent>
	)
}
