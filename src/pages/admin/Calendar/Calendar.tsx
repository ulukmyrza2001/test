import FullCalendar from '@fullcalendar/react'
import listPlugin from '@fullcalendar/list'
import dayGridPlugin from '@fullcalendar/daygrid'
import { FormatterInput } from '@fullcalendar/core'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCalendar } from '../../../store/features/calendar-slice'
import { AnyAction } from '@reduxjs/toolkit'
import { Backdrop, CircularProgress } from '@mui/material'
import {
	calendarTimeFormat,
	headerToolbar,
	isLoadingSx,
	translatebuttonText,
} from './contants'
import { AddAppoinmentsModal } from './AddAppoinmentsModal/AddAppoinmentsModal'

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
	const [appoinmentCalendarModal, setAppoinmentCalendarModal] = useState({
		create: false,
		update: false,
	})
	const [globalLoading, setGlobalLoading] = useState(false)

	const dispatch = useDispatch()

	//const

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

	function handleChangeSelectedDate(event: any) {
		console.log(event)
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
				setTimeout(() => {
					setGlobalLoading(false)
				}, 300)
			})
		}
	}, [thisData])

	return (
		<div style={{ width: '100%' }}>
			<AddAppoinmentsModal active={appoinmentCalendarModal.create} />
			<div></div>
			<Backdrop sx={isLoadingSx} open={globalLoading}>
				<CircularProgress color='inherit' />
			</Backdrop>
			<FullCalendar
				plugins={[
					dayGridPlugin,
					timeGridPlugin,
					interactionPlugin,
					listPlugin,
				]}
				locale='ru'
				firstDay={1}
				height={'89vh'}
				eventMaxStack={1}
				slotMinTime={'09:00'}
				slotMaxTime={'23:00'}
				initialView='dayGridMonth'
				noEventsText='Нет Записей'
				headerToolbar={headerToolbar}
				buttonText={translatebuttonText}
				moreLinkContent={(el) => `${el.shortText} Еще`}
				eventTimeFormat={calendarTimeFormat as FormatterInput}
				selectable={true}
				allDaySlot={false}
				dayMaxEvents={true}
				fixedWeekCount={false}
				eventStartEditable={true}
				eventDurationEditable={true}
				datesSet={(event) => handleThisMoment(event)}
				select={(w) => handleChangeSelectedDate(w)}
				eventDrop={(e: any) => console.log(e, 'eventDrop')}
				eventClick={(w: any) => console.log(w, 'eventClick')}
				events={dataCalendar?.map((item: any) => ({
					start: item.startTime,
					end: item.endTime,
					title: `${item.masterFirstName}\u00A0${item.masterLastName}`,
				}))}
			/>
		</div>
	)
}
