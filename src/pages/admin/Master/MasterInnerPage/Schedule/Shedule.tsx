
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AnyAction } from '@reduxjs/toolkit'
import { getMasterSchedule } from '../../../../../store/features/schedule-slice'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Schedule.module.css'
import { TranslateWeekShort } from '../../../../../utils/helpers/helpers'
import { Skeleton } from '@mui/material'
import { WEEK } from '../../../../../utils/constants/constants'
import { MdCreate, MdDelete } from 'react-icons/md'
import { AddDayShedule } from './AddDaySchedule/AddDaySchedule'

interface ScheduleProps {
  startWeek: string;
}
interface ScheduleInsideMapProps {
  dayScheduleId: number;
  endTime: string;
  startTime: string;
  week: string;
  workingDay: boolean;
}

export const Schedule = ({ startWeek }: ScheduleProps) => {
  const { masterSchedule, isLoadingShedule } = useSelector(
    (state: any) => state.schedule
  );

  const [dayScheduleModal, setDayScheduleModal] = useState(false);
  const [dayScheduleData, setDayScheduleData] = useState({
    daySchedulesId: 0,
    startTime: "",
    endTime: "",
  });

  const dispatch = useDispatch();
  const { masterID } = useParams();

  //function


	function handleDayScheduleChange(
		dayScheduleId: number,
		startTime: string,
		endTime: string,
	) {
		setDayScheduleData({
			daySchedulesId: dayScheduleId,
			startTime: startTime,
			endTime: endTime,
		})
		setDayScheduleModal(true)
	}

  //useEffect

  useEffect(() => {
    dispatch(
      getMasterSchedule({ masterID, startWeek }) as unknown as AnyAction
    );
  }, [startWeek]);

  //const

  const maxEndTime = masterSchedule?.dayScheduleResponses?.reduce(
    (max: any, schedule: any) => {
      const endTime = new Date(`1970-01-01T${schedule.endTime}`).getTime();
      return endTime > max ? endTime : max;
    },
    0
  );


	return (
		<div className={styles.container_schedule}>
			<AddDayShedule
				dayScheduleActive={dayScheduleModal}
				setDayScheduleActive={setDayScheduleModal}
				dayScheduleData={dayScheduleData}
				setDayScheduleData={setDayScheduleData}
				startWeek={startWeek}
			/>
			{isLoadingShedule
				? WEEK.map((el: string) => {
						return (
							<div
								className={styles.container_name_week}
								key={el}>
								<h1>{el}:</h1>
								<Skeleton
									variant='rectangular'
									width={'100%'}
									height={30}
									sx={{ borderRadius: '6px' }}
								/>
							</div>
						)
				  })
				: masterSchedule?.dayScheduleResponses?.length === 0
				? WEEK.map((element: string) => {
						return (
							<div
								className={styles.container_name_week}
								key={element}>
								<h1>{element}:</h1>
								<div className={styles.container_week}>
									<div></div>
								</div>
							</div>
						)
				  })
				: masterSchedule?.dayScheduleResponses?.map(
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
											className={
												styles.container_inside_week
											}
											style={{
												width: percentage,
												opacity: item.workingDay
													? '1'
													: '0',
											}}>
											{`${item.startTime.slice(
												0,
												5,
											)} - ${item.endTime.slice(0, 5)}`}
										</div>
									</div>
									<div className={styles.container_icon}>
										<MdCreate
											size={20}
											cursor='pointer'
											color='grey'
											onClick={() =>
												handleDayScheduleChange(
													item.dayScheduleId,
													item.startTime,
													item.endTime,
												)
											}
										/>
										<MdDelete
											size={20}
											cursor='pointer'
											color='grey'
										/>
									</div>
								</div>
							)
						},
				  )}
		</div>
	)
}
