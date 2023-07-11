import styles from './Switch.module.css'

interface SwitchProps {
	checked: boolean
	onChange: (e: any) => void
}

export const Switch = ({ checked, onChange }: SwitchProps) => {
	return (
		<label className={styles.switch}>
			<input type='checkbox' checked={checked} onChange={onChange} />
		</label>
	)
}
