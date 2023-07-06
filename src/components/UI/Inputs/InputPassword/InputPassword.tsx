import React, { ChangeEvent, useState } from 'react'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import VisibilityIcon from '@mui/icons-material/Visibility'
import styles from './InputPassword.module.css'

interface InputPasswordProps {
	label?: string
	type?: string
	onChange: (event: ChangeEvent<HTMLInputElement>) => void
	value: string | number | readonly string[] | undefined
	placeholder?: string
	disabled?: boolean
	width?: string
	height?: string
	maxWidth?: string
	minWidth?: string
	padding?: string
	borderRadius?: string
	background?: string
	border?: string
	color?: string
	fontSize?: string
	onKeyDown?: (value: any) => void
}

export function InputPassword(props: InputPasswordProps) {
	const {
		label,
		type,
		onChange,
		value,
		placeholder,
		disabled,
		onKeyDown,
		...preProps
	} = props
	const [show, setShow] = useState(false)
	return (
		<div className={styles.wrapper}>
			{label && (
				<label className={styles.label} htmlFor={label}>
					{label}
				</label>
			)}
			<div className={styles.inpcontainer}>
				<input
					className={styles.input}
					type={show ? 'text' : 'password'}
					{...preProps}
				/>
				<span className={styles.icon} onClick={() => setShow(!show)}>
					{show ? <VisibilityIcon /> : <VisibilityOffIcon />}
				</span>
			</div>
		</div>
	)
}
