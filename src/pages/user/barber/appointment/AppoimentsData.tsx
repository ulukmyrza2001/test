import React, { useEffect, useState } from 'react'
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

	console.log(freeTimeMaster)

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
		<div>
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
			<div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	)
}
