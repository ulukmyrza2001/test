import React from 'react'
import styles from './LoginForm.module.css'
import { useForm, SubmitHandler } from 'react-hook-form'
import { ModalComponent } from '../UI/Modal/Modal'
import { Button } from '../UI/Buttons/Button/Button'

interface LoginProps {
	active: boolean
	setActive: any
}

interface FormData {
	phoneNumber: string
	password: string
}

export default function LoginForm({ active, setActive }: LoginProps) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>()

	const onSubmit: SubmitHandler<FormData> = (data: any) => {
		setActive(false)
	}

	const hideLoginModal = () => {
		setActive(false)
	}

	return (
		<ModalComponent active={active} handleClose={hideLoginModal}>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				<div className={styles.input_wrapper}>
					<label htmlFor='number' className='label'>
						Телефон:
					</label>
					<input
						className={styles.input}
						type='text'
						{...register('phoneNumber', { required: true })}
					/>
					{errors.phoneNumber && <span>This field is required</span>}
				</div>
				<div className={styles.input_wrapper}>
					<label htmlFor='password' className='label'>
						Пароль:
					</label>
					<input
						className={styles.input}
						type='password'
						{...register('password', { required: true })}
					/>
					{errors.password && <span>This field is required</span>}
				</div>
				<Button type='submit'>Submit</Button>
			</form>
		</ModalComponent>
	)
}
