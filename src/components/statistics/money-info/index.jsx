import styles from './moneyInfo.module.css'
import { useSelector } from 'react-redux'
import { AnimatedContainer } from '../../../../components/UI/animated/AnimatedContainer'
import { Box } from '@mui/system'
import { LinearProgress } from '@mui/material'
import { ReactComponent as Money } from '../../../assets/icons/monye.svg'
import { ReactComponent as MoneyRed } from '../../../assets/icons/monyeRed.svg'
import { ReactComponent as Users } from '../../../assets/icons/users.svg'
import { ReactComponent as Bar } from '../../../assets/icons/bar.svg'
import { BsArrowUp, BsArrowDown } from 'react-icons/bs'

export const MoneyInfo = ({ selectValue }) => {
	const { diagramData } = useSelector((state) => state.dashboard)
	const { clinicData } = useSelector((state) => state.clinic)

	const typeDate = (type) => {
		switch (type) {
			case 'WEEK':
				return 'С прошлой недели'
			case 'MONTH':
				return 'С прошлого месяца'
			case 'YEAR':
				return 'С прошлого года'
			default:
				break
		}
	}

	const currencyType = (type) => {
		switch (type) {
			case 'SOM':
				return 'С'
			case 'TEN':
				return 'Т'
			case 'RUB':
				return 'Р'
			case 'UE':
				return ''
			default:
				break
		}
	}

	return (
		<MoneyInfoCard>
			<Card duration='0.5'>
				<WrapperInnerCard>
					<div>
						<h4>Количество пациентов</h4>
						<span>{diagramData?.countPatients}</span>
					</div>
					<Users />
				</WrapperInnerCard>
				<p>За весь период</p>
			</Card>
			<Card>
				<WrapperInnerCard>
					<div>
						<h4>Сделанные услуги</h4>
						<div
							style={{
								display: 'flex',
								gap: '5px',
							}}
						>
							<span>{diagramData?.serviceMade?.current}</span>
							<div
								style={{
									display: 'flex',
									alignItems: 'center',
									color:
										diagramData?.serviceMade?.exceeds ===
										true
											? '#10b981'
											: 'red',
								}}
							>
								{diagramData?.serviceMade?.exceeds ? (
									<BsArrowUp />
								) : (
									<BsArrowDown />
								)}
								{diagramData?.serviceMade?.difference}
							</div>
						</div>
					</div>
					<Bar />
				</WrapperInnerCard>
				{typeDate(selectValue)}
			</Card>
			<Card duration='1.1'>
				<WrapperInnerCard>
					<div>
						<h4>Сделанные визиты</h4>
						<div
							style={{
								display: 'flex',
								gap: '5px',
							}}
						>
							<span>{diagramData?.appointmentMade?.current}</span>
							<div
								style={{
									display: 'flex',
									alignItems: 'center',
									color: diagramData?.appointmentMade?.exceeds
										? '#10b981'
										: 'red',
								}}
							>
								{diagramData?.appointmentMade?.exceeds ? (
									<BsArrowUp />
								) : (
									<BsArrowDown />
								)}
								{diagramData?.appointmentMade?.difference}
							</div>
						</div>
					</div>
					<MoneyRed />
				</WrapperInnerCard>
				<Box sx={{ mt: 3 }}>
					<LinearProgress
						value={parseFloat(
							diagramData?.percentAppointments?.toFixed(1),
						)}
						variant='determinate'
					/>
				</Box>
			</Card>
			<Card duration='1.4'>
				<WrapperInnerCard>
					<div>
						<h4>Баланс</h4>
						<span>
							{diagramData?.balance}{' '}
							{currencyType(clinicData?.currency)}
						</span>
					</div>
					<Money />
				</WrapperInnerCard>
				<Box sx={{ mt: 3 }}>
					<LinearProgress
						value={parseFloat(diagramData?.percentAppointments)}
						variant='determinate'
					/>
				</Box>
			</Card>
		</MoneyInfoCard>
	)
}

const MoneyInfoCard = styled.div`
	width: 100%;
	max-width: 1440px;
	gap: 24px;
	margin: 10px 0 20px;
	margin: 0 auto;
	display: grid;
	gap: 1rem;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

	@media (min-width: 600px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media (min-width: 900px) {
		grid-template-columns: repeat(4, 2fr);
	}
`
const Card = styled(AnimatedContainer)`
	width: 100%;
	padding: 32px 24px;
	border-radius: 20px;
	box-shadow: 0px 5px 22px rgba(0, 0, 0, 0.04),
		0px 0px 0px 0.5px rgba(0, 0, 0, 0.03);
	p {
		margin-top: 16px;
	}
	:nth-child(1) {
		background: #d1e9fc;
	}
	:nth-child(2) {
		background: #d0f2ff;
	}
	:nth-child(3) {
		background: #fff7cd;
	}
	:nth-child(4) {
		background: #ffe7d9;
	}
`

const WrapperInnerCard = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	fill {
		color: #ffffff !important;
	}

	h4 {
		font-style: normal;
		font-weight: 600;
		font-size: 14px;
		line-height: 30px;
	}
	span {
		font-style: normal;
		font-weight: 700;
		font-size: 32px;
		line-height: 38px;
		color: #111927;
	}
`
