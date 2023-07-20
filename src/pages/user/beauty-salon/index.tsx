import { Fragment, useEffect } from 'react'
import styles from './Beauty.module.css'
import AboutSalon from '../../../assets/image/about-salon.svg'
import Banner1 from '../../../assets/svg/beauty/Banner1.svg'
import Banner2 from '../../../assets/svg/beauty/Banner2.svg'
import Banner3 from '../../../assets/svg/beauty/Banner3.svg'
import BannerStar from '../../../assets/svg/beauty/Star4.svg'
import BannerInstrument from '../../../assets/svg/beauty/beauty-instrument.svg'
import BannerMap from '../../../assets/svg/beauty/map_beauty-salon.svg'

import { Container } from '../../../styles/ContainerStyle/Container'
import { ReactComponent as Icon1 } from '../../../assets/icons/001-salon (Traced).svg'
import { ReactComponent as Icon2 } from '../../../assets/icons/002-shampoo (Traced).svg'
import { ReactComponent as Icon3 } from '../../../assets/icons/003-hair-cutting (Traced).svg'
import { ReactComponent as Icon4 } from '../../../assets/icons/005-toiletries (Traced).svg'
import { ReviewContent } from './review-content'
import { BsGeoAlt, BsTelephone } from 'react-icons/bs'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AnyAction } from '@reduxjs/toolkit'
import { getBrancheById } from '../../../store/features/branch-slice'
import { ServicesBranchBeauty } from './servicesBranchBeauty/ServicesBranchBeauty'

export const BeautySalonPage = () => {
	const { branchData } = useSelector((state: any) => state.branch)
	const { beautySalonID } = useParams()
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(
			getBrancheById({ branchId: beautySalonID }) as unknown as AnyAction
		)
	}, [])

	useEffect(() => {
		document.title = 'Beauty Salon | Cheber'
		return () => {
			document.title = 'Cheber' // Reset the title when the component unmounts
		}
	}, [])

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
								<span className="text">Приходите по адресу:</span>
								<p className="text">{branchData?.address}</p>
							</div>
						</div>
						<div className={styles.info_title}>
							<BsTelephone />
							<div>
								<span className="text">Ежедневно с 10:00 до 20:00</span>
								<a href="/" className="text">
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
				sx={{
					padding: '1rem 0',
				}}
			>
				<div className={styles.banner}>
					<div className={styles.wrapper_titles}>
						<div className={styles.titles}>
							<p>
								Салон красоты <br /> {branchData?.companyName}
							</p>
							<span>Качественные косметические услуги, созданные для вас</span>
						</div>
						<div className={styles.wrapper_img_banner}>
							<button className={styles.service_button_banner}>Услуги</button>
							<div>
								<img src={BannerInstrument} alt="" />
								<img src={BannerMap} alt="" />
							</div>
						</div>
					</div>
					<div className={styles.wrapper_banner}>
						<div className={styles.banner_1_star}>
							<img src={Banner3} alt="Banner" />
							<img src={BannerStar} alt="star" className={styles.star} />
						</div>
						<div>
							<img src={Banner2} alt="Banner" className={styles.banner_2} />
						</div>
						<div>
							<img src={Banner1} alt="Banner" />
						</div>
					</div>
				</div>
			</Container>
			<Container>
				<div className={styles.wrapper_about}>
					<div className={styles.wrapper_about_title}>
						<p className={styles.about}>bueno beauty</p>
						<span>
							Amet minim mollit non deserunt ullamco est sit aliqua dolor do
							amet sint. Velit officia consequat duis enim velit mollit.
							Exercitation veniam consequat sunt nostrud amet. Velit officia
							consequat duis enim velit mollit
						</span>
						<div className={styles.about_services}>
							<div className={styles.card_about}>
								<Icon1 />
								<div>
									<p className="title">Amet minim mollit</p>
									<span className="text">
										Amet minim mollit non deserunt ullam co est sit.
									</span>
								</div>
							</div>
							<div className={styles.card_about}>
								<Icon2 />
								<div>
									<p className="title">Amet minim mollit</p>
									<span className="text">
										Amet minim mollit non deserunt ullam co est sit.
									</span>
								</div>
							</div>
							<div className={styles.card_about}>
								<Icon3 />
								<div>
									<p className="title">Amet minim mollit</p>
									<span className="text">
										Amet minim mollit non deserunt ullam co est sit.
									</span>
								</div>
							</div>
							<div className={styles.card_about}>
								<Icon4 />
								<div>
									<p className="">Amet minim mollit</p>
									<span className="text">
										Amet minim mollit non deserunt ullam co est sit.
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.wrapper_about_img}>
						<img src={AboutSalon} alt="" />
					</div>
				</div>
			</Container>
			<ServicesBranchBeauty />
			<ReviewContent />
		</Fragment>
	)
}
