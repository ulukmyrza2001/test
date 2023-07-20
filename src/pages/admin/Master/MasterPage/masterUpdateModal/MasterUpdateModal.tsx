import { SetStateAction, Dispatch } from 'react'
import { ModalComponent } from '../../../../../components/UI/Modal/Modal'
import { Input } from '../../../../../components/UI/Inputs/Input/Input'
import { InputPassword } from '../../../../../components/UI/Inputs/InputPassword/InputPassword'
import { Button } from '../../../../../components/UI/Buttons/Button/Button'
import { useDispatch } from 'react-redux'
import { putMaster } from '../../../../../store/features/master-slice'
import { AnyAction } from '@reduxjs/toolkit'
import { InputNumberMask } from '../../../../../components/UI/Inputs/InputMask/InputMask'
import styles from './MasterUpdateModa.module.css'

interface MasterUpdateModalProps {
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
	masterId: number | string | undefined
}

export const MasterUpdateModal = ({
	masterData,
	setMasterData,
	masterModal,
	setMasterModal,
	masterId,
}: MasterUpdateModalProps) => {
	const dispatch = useDispatch()

	//function

	function handleClose() {
		setMasterModal({
			masterModalAdd: false,
			masterModalUpdate: false,
		})
		setMasterData({
			firstName: '',
			lastName: '',
			authInfoRequest: {
				phoneNumber: '',
				password: '',
			},
		})
	}

	function handlePut() {
		dispatch(putMaster({ masterId, masterData }) as unknown as AnyAction)
		handleClose()
	}

	function handleChangeFirsName(value: string) {
		setMasterData((prevState) => ({
			...prevState,
			firstName: value,
		}))
	}

	function handleChangeLastName(value: string) {
		setMasterData((prevState) => ({
			...prevState,
			lastName: value,
		}))
	}

	function handleChangePhoneNumber(value: string) {
		setMasterData((prevState) => ({
			...prevState,
			authInfoRequest: {
				phoneNumber: value,
				password: prevState.authInfoRequest.password,
			},
		}))
	}

	function handleChangePassword(value: string) {
		setMasterData((prevState) => ({
			...prevState,
			authInfoRequest: {
				phoneNumber: prevState.authInfoRequest.phoneNumber,
				password: value,
			},
		}))
	}

	return (
		<ModalComponent
			active={masterModal.masterModalUpdate}
			handleClose={handleClose}
			title="Редактировать мастер"
		>
			<div className={styles.container}>
				<div className={styles.container_one}>
					<Input
						label="Имя"
						value={masterData.firstName}
						onChange={(value) => handleChangeFirsName(value.target.value)}
					/>
					<Input
						label="Фио"
						value={masterData.lastName}
						onChange={(value) => handleChangeLastName(value.target.value)}
					/>
				</div>
				<div className={styles.container_one}>
					<InputNumberMask
						label="Номер"
						value={masterData.authInfoRequest.phoneNumber}
						onChange={(value) => handleChangePhoneNumber(value)}
					/>
					<InputPassword
						label="Пароль"
						value={masterData.authInfoRequest.password}
						onChange={(value) => handleChangePassword(value.target.value)}
					/>
				</div>
			</div>
			<div className={styles.container_bottom}>
				<Button
					width="80px"
					backgroundColor="white"
					color="#acacac"
					border="1px solid #acacac"
					onClick={() => handleClose()}
				>
					Отмена
				</Button>
				<Button width="120px" onClick={() => handlePut()}>
					Сохранить
				</Button>
			</div>
		</ModalComponent>
	)
}
