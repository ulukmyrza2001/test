import { useLocation } from 'react-router-dom'
import styles from './Container.module.css'

interface ContainerProps {
	children: any
	sx?: any
	backColor?: any
}

export const Container = (props: ContainerProps) => {
	return (
		<section
			className={styles.wrapper}
			style={props.backColor && props.backColor}
		>
			<div className={styles.inner_wrapper} style={props.sx}>
				{props.children}
			</div>
		</section>
	)
}
