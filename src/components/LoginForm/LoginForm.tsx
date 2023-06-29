'use client'
import React from 'react'
import styles from './LoginForm.module.css'
import { useForm, SubmitHandler } from 'react-hook-form'
import { ModalComponent } from '@/src/components/UI/Modal/Modal'
import { Button } from '../UI/Buttons/Button/Button'
import { InputNumberMask } from '../UI/Inputs/InputMask/InputMask'

interface LoginProps {
  active: boolean
  setActive: any
}

interface FormData {
  numberField: number
  passwordField: string
}

export default function LoginForm({ active, setActive }: LoginProps) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = (data: any) => {
    console.log(data)
  }

  const hideLoginModal = () => {
    setActive(false)
  }

  return (
    <ModalComponent active={active} handleClose={hideLoginModal}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.input_wrapper}>
          <label htmlFor="number" className="label">
            Телефон:
          </label>
          <input
            className={styles.input}
            type="number"
            {...register('numberField', { required: true })}
          />
          {errors.numberField && <span>This field is required</span>}
        </div>
        <div className={styles.input_wrapper}>
          <label htmlFor="password" className="label">
            Пароль:
          </label>
          <input
            className={styles.input}
            type="password"
            {...register('passwordField', { required: true })}
          />
          {errors.passwordField && <span>This field is required</span>}
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </ModalComponent>
  )
}
