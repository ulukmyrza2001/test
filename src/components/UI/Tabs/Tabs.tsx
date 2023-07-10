import { Link, Outlet, useLocation } from 'react-router-dom'
import styles from './Tabs.module.css'

interface TabsProps {
	TabsValue: { value: string | number; to: string | number }[]
}

export function Tabs(props: TabsProps) {
	const { pathname } = useLocation()

	return (
		<div className={styles.container_tabs}>
			{props.TabsValue.map((item: any) => {
				return (
					<Link
						className={styles.container_tab}
						key={item.to}
						to={item.to}>
						<h1 className={styles.tab_title}>{item.value}</h1>
						<div
							className={
								pathname.includes(item.to)
									? styles.tab_border_active
									: styles.tab_border_not_active
							}
						/>
					</Link>
				)
			})}
		</div>
	)
}
