import { useEffect } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { useDispatch, useSelector } from 'react-redux'
import { getFreeTimeScheduler } from '../../../../store/features/schedule-slice'
import { AnyAction } from 'redux'

export const AppointemntsData = ({
	appoinmentData,
	setAppointmentData,
	masterId,
}: any) => {
	const { freeTimeMaster } = useSelector((state: any) => state.schedule)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(
			getFreeTimeScheduler({
				masterID: masterId,
				startDate: appoinmentData.startDate,
			}) as unknown as AnyAction,
		)
	}, [appoinmentData.startDate])

	return (
		<div style={{ display: 'flex', gap: '10px' }}>
			<div>
				<Calendar
					onChange={(el: any) =>
						setAppointmentData({
							...appoinmentData,
							startDate: new Date(el).toISOString().slice(0, 10),
						})
					}
					value={appoinmentData.startDate}
				/>
			</div>
			<div
				style={{
					width: '100%',
					height: '100%',
					display: 'flex',
					flexWrap: 'wrap',
					gap: '10px',
				}}
			>
				{freeTimeMaster?.map((item: any, index: number) => {
					return (
						<div
							key={index}
							onClick={() =>
								setAppointmentData({
									...appoinmentData,
									startTime: item.startTime.slice(0, 5),
								})
							}
							style={{
								width: '80px',
								height: '40px',
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								justifyContent: 'center',
								border: '1px solid #acacac',
								borderRadius: '6px',
								cursor: 'pointer',
								color:
									item.startTime.slice(0, 5) ===
									appoinmentData.startTime
										? 'white'
										: '',
								backgroundColor:
									item.startTime.slice(0, 5) ===
									appoinmentData.startTime
										? '#33a011'
										: '',
							}}
						>
							{item.startTime.slice(0, 5)}
						</div>
					)
				})}
			</div>
		</div>
	)
}
