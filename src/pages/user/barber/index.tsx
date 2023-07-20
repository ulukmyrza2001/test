import { Fragment, useEffect } from 'react'
import styles from './Barber.module.css'
import Img from '../../../assets/image/imgBarber.png'
import { Container } from '../../../styles/ContainerStyle/Container'
import { AboutContent } from './aboutContent'
import { OurWorkContent } from './ourWorkContent'
import { ServicesBranchContent } from './servicesBranchContent'
import BannerBarber from '../../../assets/image/barber.svg'
import { useDispatch, useSelector } from 'react-redux'
import { getBrancheById } from '../../../store/features/branch-slice'
import { useLocation } from 'react-router-dom'
import { AnyAction } from '@reduxjs/toolkit'
import { BsDatabaseGear, BsGeoAlt, BsTelephone } from 'react-icons/bs'
import { CaruselMaster } from './caruselMaster'
import { GiTrophyCup } from 'react-icons/gi'
import { BiSupport } from 'react-icons/bi'

export const BarberPage = () => {
	const { branchData } = useSelector((state: any) => state.branch)

	const dispatch = useDispatch()

	const { pathname } = useLocation()

	useEffect(() => {
		dispatch(
			getBrancheById({
				branchId: Number(pathname.split('/').pop()),
			}) as unknown as AnyAction
		)
	}, [])

	useEffect(() => {
		dispatch(
			getBrancheById({
				branchId: Number(pathname.split('/').pop()),
			}) as unknown as AnyAction
		)
	}, [])

	useEffect(() => {
		document.title = `Barber | Cheber`
		return () => {
			document.title = 'Cheber' // Reset the title when the component unmounts
		}
	}, [])
	return (
		<Fragment>
			<Container
				backColor={{
					backgroundImage: `url(${BannerBarber})`,
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					padding: '1rem',
				}}
			>
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
								<span
									className="text"
									style={{
										color: '#d9d9d9',
									}}
								>
									Приходите по адресу:
								</span>
								<p
									className="text"
									style={{
										color: '#d9d9d9',
									}}
								>
									г.Бишкек ул.Боконбаева, 14
								</p>
							</div>
						</div>
						<div className={styles.info_title}>
							<BsTelephone />
							<div>
								<span
									className="text"
									style={{
										color: '#d9d9d9',
									}}
								>
									Ежедневно с 10:00 до 20:00
								</span>
								<a
									href="/"
									className="text"
									style={{
										color: '#d9d9d9',
									}}
								>
									+996 (550) 75-55-95
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.titles}>
					{/* <h2>PREMIUM</h2> */}
					<h1>{branchData?.companyName}</h1>
				</div>
				<div className={styles.wrapper_services_title}>
					<div className={styles.wrapper_services_title_card}>
						<GiTrophyCup color="gold" fontSize={70} />
						<h2>Quick</h2>
						<div className={styles.top_divider}></div>
						<p>
							We do our work quickly, time flies by and you are the happy owner
							of a stylish haircut
						</p>
					</div>
					<div className={styles.wrapper_services_title_card}>
						<BiSupport color="gold" fontSize={70} />
						<h2>Крутой</h2>
						<div className={styles.top_divider}></div>
						<p>
							Мы делаем свою работу быстро, время пролетает незаметно, и вы
							становитесь счастливым обладателем стильной стрижки
						</p>
					</div>
					<div className={styles.wrapper_services_title_card}>
						<BsDatabaseGear color="gold" fontSize={70} />
						<h2>Дорогой</h2>
						<div className={styles.top_divider}></div>
						<p>
							Наши мастера - профессионалы и не могут стоить дешево, и разве
							цена не придает определенный статус.
						</p>
					</div>
				</div>
				<div className={styles.about_barber}>
					<div className={styles.about_text}>
						<span className="title">Новости</span>
						<span className="text">11 ИЮНЬ</span>
						<p>
							Мы наконец-то получили мини-бар и кофеварку, теперь в жаркую
							погоду можно охладиться прохладительным напитком, а в холодную -
							выпить чашечку кофе.
						</p>
						<span className="text">11 ИЮНЬ</span>
						<p>
							Борис "Бритва" имеет множество титулов и наград в нашей команде,
							он может сделать вам абсолютно любую стрижку и сотворить что-то
							невероятное с вашей бородой
						</p>
					</div>
					<hr />
					<div className={styles.wrapper_slider}>
						<img src={Img} />
					</div>
				</div>
			</Container>
			<ServicesBranchContent />
			<br />
			<CaruselMaster />
			<OurWorkContent />
			<AboutContent />
		</Fragment>
	)
}
