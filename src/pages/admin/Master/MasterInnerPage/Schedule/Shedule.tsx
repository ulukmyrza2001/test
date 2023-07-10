import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AnyAction } from '@reduxjs/toolkit'
import { getMasterSchedule } from '../../../../../store/features/schedule-slice'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Schedule.module.css'
import { TranslateWeekShort } from '../../../../../utils/helpers/helpers'

interface ScheduleProps {
	startWeek: string
}
interface ScheduleInsideMapProps {
	dayScheduleId: number
	endTime: string
	startTime: string
	week: string
	workingDay: boolean
}

export const Schedule = ({ startWeek }: ScheduleProps) => {
	const { masterSchedule, isLoadingShedule } = useSelector(
		(state: any) => state.schedule,
	)

	const dispatch = useDispatch()
	const { masterID } = useParams()

	//useEffect

	useEffect(() => {
		dispatch(
			getMasterSchedule({ masterID, startWeek }) as unknown as AnyAction,
		)
	}, [startWeek])

	//const

	const maxEndTime = masterSchedule?.dayScheduleResponses.reduce(
		(max: any, schedule: any) => {
			const endTime = new Date(`1970-01-01T${schedule.endTime}`).getTime()
			return endTime > max ? endTime : max
		},
		0,
	)

	return (
		<div className={styles.container_schedule}>
			{masterSchedule?.dayScheduleResponses?.map(
				(item: ScheduleInsideMapProps) => {
					const endTime = new Date(
						`1970-01-01T${item.endTime}`,
					).getTime()
					const percentage =
						((endTime / maxEndTime) * 100).toFixed(2) + '%'
					return (
						<div
							className={styles.container_name_week}
							key={item.dayScheduleId}>
							<h1>{TranslateWeekShort(item.week)}:</h1>
							<div className={styles.container_week}>
								<div
									className={styles.container_inside_week}
									style={{
										width: percentage,
									}}>
									{`${item.startTime.slice(
										0,
										5,
									)} - ${item.endTime.slice(0, 5)}`}
								</div>
							</div>
						</div>
					)
				},
			)}
		</div>
	)
}
