import { useEffect, useState } from 'react'
import { Container } from '../../../styles/ContainerStyle/Container'
import styles from './style.module.css'
export const HistoryPage = () => {
	const [tabs, setTabs] = useState<1 | 2>(1)
	useEffect(() => {
		document.title = 'History | Cheber'
		return () => {
			document.title = 'Cheber' // Reset the title when the component unmounts
		}
	}, [])
	return (
		<Container>
			<div className={styles.main_wrapper}>
				<div>BreadCrumbs</div>
				<h1 style={{ fontWeight: '500', fontSize: '26px' }}>История записей</h1>

				<div className={styles.content_wrapper}>
					<div className={styles.switcher}>
						<h4 className={styles.tabs_title} onClick={() => setTabs(1)}>
							активные
						</h4>
						<h4 className={styles.tabs_title} onClick={() => setTabs(2)}>
							прошлые
						</h4>
					</div>
				</div>
			</div>
		</Container>
	)
}
