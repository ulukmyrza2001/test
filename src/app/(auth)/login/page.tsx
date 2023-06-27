'use client'
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import styles from './Login.module.css'

interface FormData {
  numberField: number
  passwordField: string
}

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = (data: any) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div>
        <label>Number Field:</label>
        <input type="number" {...register('numberField', { required: true })} />
        {errors.numberField && <span>This field is required</span>}
      </div>

      <div>
        <label>Password Field:</label>
        <input type="password" {...register('passwordField', { required: true })} />
        {errors.passwordField && <span>This field is required</span>}
      </div>

      <button type="submit">Submit</button>
    </form>
  )
}
