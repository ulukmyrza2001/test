import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCalendar } from '../../../store/features/calendar-slice'
import { AnyAction } from '@reduxjs/toolkit'

export const Calendar = () => {
	const { dataCalendar } = useSelector((state: any) => state.calendar)

	const dispatch = useDispatch()

	console.log(dataCalendar)

	useEffect(() => {
		dispatch(
			getCalendar({
				startTime: '2023-07-01',
				endTime: '2023-07-04',
				masterID: [],
			}) as unknown as AnyAction,
		)
	}, [])

	return (
		<div style={{ width: '100%' }}>
			<FullCalendar
				plugins={[dayGridPlugin]}
				initialView='dayGridMonth'
				height={700}
			/>
		</div>
	)
}
