import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { FormatterInput } from '@fullcalendar/core'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCalendar } from '../../../store/features/calendar-slice'
import { AnyAction } from '@reduxjs/toolkit'
import { Backdrop, CircularProgress } from '@mui/material'

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
	const [globalLoading, setGlobalLoading] = useState(false)

	const dispatch = useDispatch()

	//const

	const calendarTimeFormat = {
		hour: 'numeric',
		minute: '2-digit',
	}

	const isLoadingSx = {
		color: '#fff',
		zIndex: (theme: any) => theme.zIndex.drawer + 1,
	}

	//function

	function handleThisMoment(event: CalendarThisDataProps) {
		const startDate = new Date(event.startStr)
		const endDate = new Date(event.endStr)
		setGlobalLoading(true)
		setThisData({
			startTime: startDate.toISOString().split('T')[0],
			endTime: endDate.toISOString().split('T')[0],
		})
	}

	//useEffect

	useEffect(() => {
		if (thisData.startTime === '' || thisData.endTime === '') {
			setGlobalLoading(true)
		} else {
			dispatch(
				getCalendar({
					startTime: thisData.startTime,
					endTime: thisData.endTime,
					masterID: [],
				}) as unknown as AnyAction,
			).then(() => {
				setGlobalLoading(false)
			})
		}
	}, [thisData])

	return (
		<div style={{ width: '100%' }}>
			<Backdrop sx={isLoadingSx} open={globalLoading}>
				<CircularProgress color='inherit' />
			</Backdrop>
			<FullCalendar
				plugins={[dayGridPlugin]}
				initialView='dayGridMonth'
				locale='ru'
				firstDay={1}
				height={700}
				eventTimeFormat={calendarTimeFormat as FormatterInput}
				datesSet={(event) => handleThisMoment(event)}
				events={dataCalendar.map((item: any) => ({
					start: item.startTime,
					end: item.endTime,
					title: `${item.masterFirstName}\u00A0${item.masterLastName}`,
				}))}
			/>
		</div>
	)
}
