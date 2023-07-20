import { Fragment, useEffect } from 'react'
import styles from './Beauty.module.css'
import Banner1 from '../../../assets/svg/beauty/Banner1.svg'
import { Container } from '../../../styles/ContainerStyle/Container'
import { ReviewContent } from './review-content'
import { BsGeoAlt, BsTelephone } from 'react-icons/bs'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AnyAction } from '@reduxjs/toolkit'
import { getBrancheById } from '../../../store/features/branch-slice'
import { ServicesBranchBeauty } from './servicesBranchBeauty/ServicesBranchBeauty'
import { PopularServicesContent } from './popular-services'
import { AboutContent } from './about'
import { MastersContent } from './masters'

export const BeautySalonPage = () => {
	const { branchData } = useSelector((state: any) => state.branch)
	const { beautySalonID } = useParams()
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(

			getBrancheById({ branchId: beautySalonID }) as unknown as AnyAction,
		)
	}, [])

	useEffect(() => {
		document.title = 'Beauty Salon | Cheber'
		return () => {
			document.title = 'Cheber' // Reset the title when the component unmounts
		}
	}, [])

	const scrollToBlock = (blockId: any) => {
		const blockElement = document.getElementById(blockId)
		if (blockElement) {
			blockElement.scrollIntoView({ behavior: 'smooth' })
		}
	}

	return (
		<Fragment>
			<Container>
				<div className={styles.header}>
					<div className={styles.inner_header}>
						<span>Home</span>
						<span>News</span>
						<span>About</span>
						<span>Contacts</span>
					</div>
					<div className={styles.info}>
						<div className={styles.info_title}>
							<BsGeoAlt fontSize={20} />
							<div>

								<span className='text'>
									Приходите по адресу:
								</span>
								<p className='text'>{branchData?.address}</p>
							</div>
						</div>
						<div className={styles.info_title}>
							<BsTelephone />
							<div>

								<span className='text'>
									Ежедневно с 10:00 до 20:00
								</span>
								<a href='/' className='text'>
									{branchData?.phoneNumber}
								</a>
							</div>
						</div>
					</div>
				</div>
			</Container>
			<Container
				backColor={{
					backgroundColor: '#cda582',
				}}
			>
				<div className={styles.banner}>
					<div className={styles.wrapper_titles}>
						<div className={styles.titles}>
							<span>Hair Salon, Masseuse, Beauty Salon</span>
							<p>
								Салон красоты <br /> {branchData?.companyName}
							</p>
							<span className={styles.decs}>
								Качественные косметические услуги, созданные для
								вас
							</span>
							<button
								className={styles.service_button_banner}
								onClick={() => scrollToBlock('services')}
							>
								Услуги
							</button>
						</div>
					</div>
					<div className={styles.wrapper_banner}>
						<img src={Banner1} alt='Banner' />
					</div>
				</div>
			</Container>
			<PopularServicesContent />
			<AboutContent />
			<div id={'services'}>
				<ServicesBranchBeauty />
			</div>
			<MastersContent />
			<ReviewContent />
		</Fragment>
	)
}
