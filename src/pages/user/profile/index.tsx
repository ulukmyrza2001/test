import { useEffect, useState } from 'react'
import styles from './style.module.css'
import { Container } from '../../../styles/ContainerStyle/Container'
import { ImagePicker } from '../../../components/UI/ImagePicker/ImagePicker'
import { Input } from '../../../components/UI/Inputs/Input/Input'
import { BsFillPenFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { getUsersProfile, putUsersId } from '../../../store/features/user-slice'
import { AppDispatch } from '../../../store'
import { AnyAction } from '@reduxjs/toolkit'
import { InputNumberMask } from '../../../components/UI/Inputs/InputMask/InputMask'
import { InputPassword } from '../../../components/UI/Inputs/InputPassword/InputPassword'
import { Button } from '../../../components/UI/Buttons/Button/Button'
interface IprofileData {
	id: number
	firstName: string
	lastName?: string
	phoneNumber: string
	avatar?: string | null
}
interface IpasswordData {
	oldPassword: string
	newPassword: string
}

export const ProfilePage = () => {
	const { usersProfileData } = useSelector((state: any) => state.users)
	const dispatch = useDispatch<AppDispatch>()
	const [profileData, setProfileData] = useState<IprofileData>({
		id: 0,
		firstName: '',
		lastName: '',
		phoneNumber: '',
		avatar: '',
	})
	const [disabled, setDisabled] = useState<boolean>(true)
	const [passwordData, setPassswordData] = useState<IpasswordData>({
		oldPassword: '',
		newPassword: '',
	})

	useEffect(() => {
		dispatch(getUsersProfile() as unknown as AnyAction)

		document.title = 'Profile | Cheber'
		return () => {
			document.title = 'Cheber'
		}
	}, [dispatch])

	useEffect(() => {
		if (!usersProfileData) {
			setProfileData({
				id: 0,
				firstName: '',
				lastName: '',
				phoneNumber: '',
				avatar: '',
			})
		}
		setProfileData({
			id: usersProfileData?.id,
			firstName: usersProfileData?.firstName,
			lastName: usersProfileData?.lastName,
			phoneNumber: usersProfileData?.phoneNumber,
			avatar: usersProfileData?.avatar,
		})
	}, [usersProfileData])

	const putSubmitHandler = () => {
		dispatch(
			putUsersId({
				usersID: usersProfileData?.id,
				usersData: {
					firstName: profileData?.firstName,
					lastName: profileData?.lastName,
					authInfoUpdateRequest: {
						phoneNumber: profileData?.phoneNumber,
						oldPassword: passwordData?.oldPassword,
						newPassword: passwordData?.newPassword,
					},
				},
			}) as unknown as AnyAction,
		)
		setDisabled(false)
	}

	return (
		<Container>
			<h1 className={styles.page_text}>Личный кабинет</h1>
			<div className={styles.wrapper}>
				<div className={styles.to_left}>
					<div className={styles.current_data}>
						<div className={styles.img_picker}>
							<ImagePicker
								borderRadius='999px'
								border='1px solid silver'
							/>
						</div>
						<h3 className={styles.name}>
							{usersProfileData?.firstName}
						</h3>
						<p className={styles.number}>
							{usersProfileData?.phoneNumber}
						</p>
					</div>
					<div className={styles.tabs}>
						<div className={styles.tab}>
							<BsFillPenFill
								style={{ marginRight: '10px' }}
								color='#ff6972'
							/>
							Редактировать данные
						</div>
					</div>
				</div>
				<div className={styles.to_right}>
					<div className={styles.rename}>
						<p className='title'>Редактировать данные</p>
						<Button
							width='150px'
							onClick={() => setDisabled(!disabled)}
						>
							Редактировать
						</Button>
					</div>
					<div className={styles.inputs}>
						<Input
							disabled={disabled}
							value={profileData?.firstName}
							placeholder='Имя:'
							onChange={(e) =>
								setProfileData((prevData) => ({
									...prevData!,
									firstName: e.target.value,
								}))
							}
							className={styles.input}
						/>
						<Input
							disabled={disabled}
							value={profileData?.lastName}
							placeholder='Фамилия:'
							className={styles.input}
							onChange={(e) =>
								setProfileData((prevData) => ({
									...prevData!,
									lastName: e.target.value,
								}))
							}
						/>
						<InputNumberMask
							disabled={disabled}
							border='none'
							fontSize='16px'
							width='100%'
							minWidth='400px'
							height='60px'
							boxShadow=' 0 2px 8px hsla(0, 0%, 65.1%, 0.25)'
							value={profileData?.phoneNumber}
							onChange={(e) =>
								setProfileData((prevData) => ({
									...prevData!,
									phoneNumber: e,
								}))
							}
						/>
					</div>
					<p className='title'> Сменить пароль</p>
					<div className={styles.inputs}>
						<InputPassword
							disabled={disabled}
							value={passwordData.oldPassword}
							placeholder='Текущий пароль:'
							className={styles.input}
							onChange={(e) =>
								setPassswordData((prevData) => ({
									...prevData,
									oldPassword: e.target.value,
								}))
							}
						/>
						<InputPassword
							disabled={disabled}
							value={passwordData.newPassword}
							onChange={(e) =>
								setPassswordData((prevData) => ({
									...prevData,
									newPassword: e.target.value,
								}))
							}
							placeholder='Новый пароль:'
							className={styles.input}
						/>
						<Button onClick={putSubmitHandler} disabled={disabled}>
							Сохранить
						</Button>
					</div>
				</div>
			</div>
		</Container>
	)
}
