import { ModalComponent } from '../../../../components/UI/Modal/Modal'

export const AddAppoinmentsModal = () => {
	return (
		<ModalComponent
			active={true}
			handleClose={() => false}
			title='Новый визит'>
			<div>IN PROGRESS</div>
		</ModalComponent>
	)
}
