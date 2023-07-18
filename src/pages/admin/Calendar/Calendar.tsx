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
import styles from './Calendar.module.css'
import { MultiSelect } from '../../../components/UI/Selects/MultiSelect/MultiSelect'
import { getMaster } from '../../../store/features/master-slice'
import { translateObject } from '../../../utils/helpers/helpers'

interface CalendarThisDataProps {
	endStr: string
	startStr: string
	view: any
}

interface handleChangeSelectedDateProps {
	allDay: boolean
	end: Date
	endStr: string
	jsEvent: any
	startStr: string
	start: Date
	view: any
}

interface dataMasterProps {
	id: number
	firstName: string
	lastName: string
	phoneNumber: string
	avatar: string
}

export const Calendar = () => {
	const { dataCalendar } = useSelector((state: any) => state.calendar)
	const { dataMaster, isLoadingMaster } = useSelector(
		(state: any) => state.master,
	)
	const [thisData, setThisData] = useState({
		startTime: '',
		endTime: '',
		masterId: [],
	})
	const [appointmentCalendarModal, setAppointmentCalendarModal] = useState({
		create: false,
		update: false,
	})
	const [appointmentsCalendarData, setAppointmentsCalendarData] = useState({
		masterId: null,
		serviceIds: [],
		appointmentStatus: '',
		startDate: '',
		startTime: '',
		endTime: '',
		description: '',
	})
	const [globalLoading, setGlobalLoading] = useState(false)

	const dispatch = useDispatch()

	//function

	function handleThisMoment(event: CalendarThisDataProps) {
		const startDate = new Date(event.startStr)
		const endDate = new Date(event.endStr)
		setGlobalLoading(true)
		setThisData({
			...thisData,
			startTime: startDate.toISOString().split('T')[0],
			endTime: endDate.toISOString().split('T')[0],
		})
	}

	function handleChangeSelectedDate(event: handleChangeSelectedDateProps) {
		console.log(event)
		setAppointmentCalendarModal({
			create: true,
			update: false,
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
					masterID: translateObject(thisData.masterId),
				}) as unknown as AnyAction,
			).then(() => {
				if (!dataMaster) {
					setGlobalLoading(dataMaster)
				} else {
					setGlobalLoading(false)
				}
			})
		}
	}, [thisData])

	useEffect(() => {
		dispatch(getMaster() as unknown as AnyAction)
	}, [])

	return (
		<div className={styles.container_calendar}>
			<AddAppoinmentsModal
				setAppointmentCalendarModal={setAppointmentCalendarModal}
				active={appointmentCalendarModal.create}
				appointmentsCalendarData={appointmentsCalendarData}
				setAppointmentsCalendarData={setAppointmentsCalendarData}
			/>
			<Backdrop sx={isLoadingSx} open={globalLoading}>
				<CircularProgress color='inherit' />
			</Backdrop>
			<div className={styles.container_calendar_header}>
				<MultiSelect
					label=''
					options={dataMaster?.map((item: dataMasterProps) => {
						return {
							value: item.id,
							label: `${item.firstName} ${item.lastName}`,
						}
					})}
					value={thisData.masterId}
					onChange={(e) =>
						setThisData({
							...thisData,
							masterId: e,
						})
					}
					placeholder='Выбрать мастера'
					noOptionsMessage={() => 'Нет мастеры'}
					isLoading={isLoadingMaster}
					isClearable={true}
				/>
			</div>
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
