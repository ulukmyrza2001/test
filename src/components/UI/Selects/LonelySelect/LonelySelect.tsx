import React from 'react'
import Select from 'react-select'
import styles from './LonelySelect.module.css'

interface LonelySelectProps {
	options: { label: string; value: string | number }[] | []
	label: string
	placeholder: string
	noOptionsMessage: (obj: { inputValue: string }) => React.ReactNode
	value: { label: string; value: string | number } | null
	onChange: (e: any) => void
	isClearable: boolean
	isLoading: boolean
	isDisabled: boolean
}

export const LonelySelect = ({
	options = [],
	label = '',
	placeholder = '',
	noOptionsMessage = () => null,
	value = null,
	onChange = () => {},
	isClearable = false,
	isLoading = false,
	isDisabled = false,
}: LonelySelectProps) => {
	const customStyles = {
		control: (provided: any, state: any) => ({
			...provided,
			height: '40px',
		}),
	}
	return (
		<div className={styles.wrapper}>
			<div className={styles.label}>{label}</div>
			<Select
				styles={customStyles}
				options={options}
				placeholder={placeholder}
				noOptionsMessage={noOptionsMessage}
				value={value}
				onChange={onChange}
				isClearable={isClearable}
				isLoading={isLoading}
				isDisabled={isLoading || isDisabled}
				isSearchable={true}
			/>
		</div>
	)
}
