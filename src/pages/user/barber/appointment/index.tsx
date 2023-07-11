import styles from './Appointment.module.css'
import { Container } from '../../../../styles/ContainerStyle/Container'
import { BreadCrumbs } from '../../../../components/UI/BreadCrumbs/BreadCrumbs'
import LinearProgress, {
	linearProgressClasses,
} from '@mui/material/LinearProgress'
import { styled } from '@mui/material'
import { GiBeard } from 'react-icons/gi'
import { BiHomeAlt, BiSend, BiTimeFive } from 'react-icons/bi'
import { MdDelete } from 'react-icons/md'
import { useSelector } from 'react-redux'

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
	const { branchData, isLoadingBranch } = useSelector(
		(state: any) => state.branch,
	)

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
					<div className={styles.progress_name}>
						<GiBeard fontSize={30} />
						<span>Выберите мастера</span>
					</div>
					<div className={styles.progress_name}>
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
				{data?.map((item, index) => (
					<div key={item.id}>
						<div className={styles.amount_apoointment}>
							<span>Запись № {index + 1}</span>
							<MdDelete fontSize={24} />
						</div>
						<div className={styles.main}>
							<p className='title'>{item.name}</p>
							<span className='text'>
								{item.price} {item.valuta} • {item.duration} Min
							</span>
						</div>
					</div>
				))}
			</div>
		</Container>
	)
}
