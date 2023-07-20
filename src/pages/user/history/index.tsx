import { useEffect, useState } from 'react'
import { Container } from '../../../styles/ContainerStyle/Container'
import styles from './style.module.css'
import { Button } from '../../../components/UI/Buttons/Button/Button'
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

				<div className={styles.control_wrapper}>
					<div className={styles.switcher}>
						<h4
							className={
								tabs === 1 ? styles.tabs_title_active : styles.tabs_title
							}
							onClick={() => setTabs(1)}
						>
							активные
						</h4>
						<h4
							className={
								tabs === 2 ? styles.tabs_title_active : styles.tabs_title
							}
							onClick={() => setTabs(2)}
						>
							прошлые
						</h4>
					</div>
				</div>

				<div className={styles.content_wrapper}>
					{tabs === 1 ? (
						<div className={styles.active}>active</div>
					) : (
						<div className={styles.passive}>
							passive
							<div className={styles.history_card}>
								<div className={styles.date_info}>
									<div className={styles.date}>
										<h4 className={styles.history_card_title}>
											ЗАПИСЬ № 20956634
										</h4>
										<h4 className={styles.history_card_title}>13 июля 15:00</h4>
									</div>
									<div className={styles.status}>Завершена</div>
								</div>
								<div className={styles.main_info}>
									<h4 className={styles.service_name}>Барбершоп</h4>
									<h4 className={styles.company_name}>Барбершоп Marcony</h4>
									<div className={styles.service_wrapper}>
										<div
											style={{
												display: 'flex',
												flexDirection: 'column',
												gap: '7px',
												marginBottom: '20px',
											}}
										>
											<span className={styles.pre_title}>Услуга</span>
											<span className={styles.title}>Стрижка</span>
										</div>
										<div
											style={{
												display: 'flex',
												flexDirection: 'column',
												gap: '7px',
											}}
										>
											<span className={styles.pre_title}>Мастер</span>
											<span className={styles.title}>Киркоров</span>
										</div>
									</div>
								</div>
								<div className={styles.actions}>
									<Button
										backgroundColor="#fff"
										color="var(--ui-background-color)"
										border="1px solid var(--ui-background-color)"
										fontSize="12px"
									>
										Оценить запись
									</Button>
									<Button fontSize="12px">Записаться снова</Button>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</Container>
	)
}
