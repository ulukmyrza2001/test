import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getCalendar } from '../../../store/features/calendar-slice'
import { AnyAction } from '@reduxjs/toolkit'

export const Calendar = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(
			getCalendar({
				startTime: '',
				endTime: '',
				masterID: [1, 2],
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
