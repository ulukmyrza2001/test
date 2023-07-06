import { SetStateAction, useEffect, Dispatch } from 'react'
import { ModalComponent } from '../../../../../components/UI/Modal/Modal'
import { Input } from '../../../../../components/UI/Inputs/Input/Input'
import { InputPassword } from '../../../../../components/UI/Inputs/InputPassword/InputPassword'
import { InputPhoneNumber } from '../../../../../components/UI/Inputs/InputPhoneNumber/InputPhoneNumber'

interface MasterAddModalProps {
	masterData: {
		firstName: string
		lastName: string
		authInfoRequest: {
			phoneNumber: string
			password: string | number
		}
	}
	setMasterData: Dispatch<
		SetStateAction<{
			firstName: string
			lastName: string
			authInfoRequest: {
				phoneNumber: string
				password: string
			}
		}>
	>
	masterModal: {
		masterModalAdd: boolean
		masterModalUpdate: boolean
	}
	setMasterModal: (modalState: {
		masterModalAdd: boolean
		masterModalUpdate: boolean
	}) => void
}

export const MasterAddModal = ({
	masterData,
	setMasterData,
	masterModal,
	setMasterModal,
}: MasterAddModalProps) => {
	function handleClose() {
		setMasterModal({
			masterModalAdd: false,
			masterModalUpdate: false,
		})
	}

	function handleChange(event: string) {
		setMasterData((prevState) => ({
			...prevState,
			lastName: event,
		}))
	}

	return (
		<ModalComponent
			active={masterModal.masterModalAdd}
			handleClose={handleClose}
			title='Добавить мастер'>
			<div>
				{/* <Input label='Имя' />
				<Input label='Фио' />
				<InputPhoneNumber label='Номер' />
				<InputPassword label='Пароль' /> */}
			</div>
		</ModalComponent>
	)
}
