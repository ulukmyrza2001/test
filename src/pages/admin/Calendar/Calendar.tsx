import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCalendar } from '../../../store/features/calendar-slice'
import { AnyAction } from '@reduxjs/toolkit'

interface CalendarThisDataProps {
	endStr: string
	startStr: string
	view: any
}

export const Calendar = () => {
	const { dataCalendar } = useSelector((state: any) => state.calendar)

	const [thisData, setThisData] = useState({
		startTime: '',
		endTime: '',
	})

	const dispatch = useDispatch()

	//function

	function handleThisMoment(event: CalendarThisDataProps) {
		const startDate = new Date(event.startStr)
		const endDate = new Date(event.endStr)

		setThisData({
			startTime: startDate.toISOString().split('T')[0],
			endTime: endDate.toISOString().split('T')[0],
		})
	}

	//useEffect

	useEffect(() => {
		if (thisData.startTime === '' || thisData.endTime === '') {
			console.error('Error no date')
		} else {
			dispatch(
				getCalendar({
					startTime: thisData.startTime,
					endTime: thisData.endTime,
					masterID: [],
				}) as unknown as AnyAction,
			)
		}
	}, [thisData])

	return (
		<div style={{ width: '100%' }}>
			<FullCalendar
				plugins={[dayGridPlugin]}
				initialView='dayGridMonth'
				height={700}
				datesSet={(event) => handleThisMoment(event)}
			/>
		</div>
	)
}
