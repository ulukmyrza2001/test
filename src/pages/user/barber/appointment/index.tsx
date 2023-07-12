import styles from './Appointment.module.css'
import { Container } from '../../../../styles/ContainerStyle/Container'
import { BreadCrumbs } from '../../../../components/UI/BreadCrumbs/BreadCrumbs'
import LinearProgress, {
	linearProgressClasses,
} from '@mui/material/LinearProgress'
import { styled } from '@mui/material'
import { GiBeard, GiCancel } from 'react-icons/gi'
import { BiHomeAlt, BiSend, BiTimeFive } from 'react-icons/bi'
import { MdDelete } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { AnyAction } from '@reduxjs/toolkit'
import { getMasterByBranchId } from '../../../../store/features/master-slice'
import { Button } from '../../../../components/UI/Buttons/Button/Button'
import { Input } from '../../../../components/UI/Inputs/Input/Input'
import { AccordionUi } from '../../../../components/UI/Accordion/AccordionUi'
import { AppointemntsData } from './AppoimentsData'

const data = [
	{
		id: 1,
		name: 'Стрижка мужская',
		price: '500',
		duration: '30',
		valuta: 'SOM',
	},
]

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
	height: 10,
	borderRadius: 5,
	[`&.${linearProgressClasses.colorPrimary}`]: {
		backgroundColor:
			theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
	},
	[`& .${linearProgressClasses.bar}`]: {
		borderRadius: 5,
		backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
	},
}))

export const AppointmenBarberPage = () => {
	const dispatch = useDispatch()
	const { id } = useParams()

	const [next, setNext] = useState<any>(1)

	const { branchData, isLoadingBranch } = useSelector(
		(state: any) => state.branch,
	)

	const { dataMasterBranch } = useSelector((state: any) => state.master)

	const [appoinmentData, setAppointmentData] = useState({
		masterId: '',
		serviceIds: [],
		startDate: new Date().toISOString().slice(0, 10),
		startTime: '',
		endTime: '',
		description: '',
	})

	useEffect(() => {
		dispatch(getMasterByBranchId({ branchId: id }) as never as AnyAction)
	}, [])

	const BREAD_APPOINTMENT_MASTER = [
		{
			name: <BiHomeAlt fontSize={26} color='grey' />,
			to: '/',
			isLoading: isLoadingBranch,
			path: 1,
		},
		{
			name: 'BARBERSHOP BEYBARS',
			to: `/barber/${branchData?.branchId}`,
			path: 2,
		},
		{
			name: 'ABU',
			to: '/:id',
			path: 3,
		},
	]
	return (
		<Container>
			<BreadCrumbs paths={BREAD_APPOINTMENT_MASTER} />
			<span
				className='text'
				style={{
					color: 'grey',
				}}>
				AppointmenBarberPage
			</span>
			<br />

			<div className={styles.wrapper}>
				<div className={styles.wrapper_progres_name}>
					<div
						className={styles.progress_name}
						onClick={() => setNext(1)}>
						<GiBeard fontSize={30} />
						<span>Выберите мастера</span>
					</div>
					<div
						className={styles.progress_name}
						onClick={() => (next > 2 ? setNext(2) : '')}>
						<BiTimeFive fontSize={30} />
						<span>Выберите дату</span>
					</div>
					<div className={styles.progress_name}>
						<BiSend fontSize={30} />
						<span>Подтвердите данные</span>
					</div>
				</div>
				<div className={styles.wrapper_progres}>
					<BorderLinearProgress variant='determinate' value={10} />
				</div>
			</div>
			<div className={styles.wrapper_appointment}>
				{next === 1 && (
					<div>
						{data?.map((item, index) => (
							<div key={index}>
								<div className={styles.amount_apoointment}>
									<span>Запись № {index + 1}</span>
									<MdDelete fontSize={24} />
								</div>
								<div className={styles.main}>
									<p className='title'>{item.name}</p>
									<span className='text'>
										{item.price} {item.valuta} •{' '}
										{item.duration} Min
									</span>
								</div>
								<div className={styles.cards}>
									<div className={styles.card}>
										<div className={styles.ava_wrapper}>
											<img
												src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7csvPWMdfAHEAnhIRTdJKCK5SPK4cHfskow&usqp=CAU'
												alt=''
												className={styles.ava}
											/>
										</div>
										<h3 className={styles.name}>
											любой мастер
										</h3>
										<span className={styles.rate}></span>
									</div>
									{dataMasterBranch?.map(
										(item: any, index: number) => (
											<div
												className={styles.card}
												key={index}>
												<div
													className={
														styles.ava_wrapper
													}>
													<img
														src={item.avatar}
														alt=''
														className={styles.ava}
													/>
												</div>
												<h3 className={styles.name}>
													{item.firstName}{' '}
													{item.lastName}
												</h3>
												<span className={styles.rate}>
													4.3
												</span>
											</div>
										),
									)}
								</div>
							</div>
						))}
					</div>
				)}
				<div>
					{next === 2 && (
						<div>
							<AppointemntsData
								appoinmentData={appoinmentData}
								setAppointmentData={setAppointmentData}
								masterId={id}
							/>
						</div>
					)}
				</div>
				<div>
					{next === 3 && (
						<div>
							<div>
								<h4>ТОПОР</h4>
								<h4>30 июля</h4>
							</div>
							<div className={styles.finish_card}>
								<div className={styles.top}>
									<h4 className={styles.top_h4}>Запись №1</h4>
									<h4 className={styles.top_h4}>
										Стрижка + бритье
									</h4>
									<h4 className={styles.top_h4}>
										Начало в 19:00
									</h4>
								</div>
								<div className={styles.bottom}>
									<div className={styles.bottom_wrapper}>
										<div
											style={{
												display: 'flex',
												flexDirection: 'row',
												justifyContent: 'center',
												alignItems: 'center',
												gap: '9px',
												margin: '10px 0',
											}}>
											<div
												className={
													styles.finish_ava_wrapper
												}>
												<img
													src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7csvPWMdfAHEAnhIRTdJKCK5SPK4cHfskow&usqp=CAU'
													alt=''
													className={styles.ava}
												/>
											</div>
											<span>Айдана</span>
										</div>
										<h5
											style={{
												fontWeight: '500',
												color: 'gray',
											}}>
											от 7000 ₸ 1 ч. 30 мин.
										</h5>
									</div>
								</div>
							</div>
							<div className={styles.user_contact}>
								<h4
									className='title'
									style={{ marginBottom: '20px' }}>
									Контактные данные
								</h4>
								<div
									style={{
										display: 'flex',
										flexDirection: 'column',
										gap: '20px',
									}}>
									<Input placeholder='Ваше имя' />
									<Input placeholder='ваш номер' />
									<textarea
										placeholder='Оставить комментарий'
										name='das'
										id=''
										style={{
											border: '1px solid silver',
											width: '100%',
											height: '100px',
											borderRadius: '6px',
											fontSize: '24px',
										}}></textarea>
								</div>
							</div>
						</div>
					)}
				</div>
				<div className={styles.actions}>
					{next === 1 && (
						<div className={styles.add}>
							Добавить услугу
							{/* <AccordionUi /> */}
						</div>
					)}
					<div className={styles.btn_wrapper}>
						{next !== 1 && (
							<Button
								onClick={() => setNext(next - 1)}
								fontSize='20px'
								backgroundColor='silver'>
								Назад
							</Button>
						)}

						{next >= 3 ? (
							<Button>Записаться</Button>
						) : (
							<Button
								onClick={() => setNext(next + 1)}
								fontSize='20px'>
								Далее
							</Button>
						)}
					</div>
				</div>
			</div>
		</Container>
	)
}
