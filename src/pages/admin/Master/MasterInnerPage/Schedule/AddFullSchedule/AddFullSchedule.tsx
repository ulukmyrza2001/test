import { useState } from 'react'
import { DataPicker } from '../../../../../../components/UI/DataPicker/DataPicker'
import { ModalComponent } from '../../../../../../components/UI/Modal/Modal'
import { FULL_WEEK } from '../../../../../../utils/constants/constants'
import styles from './AddFullSchedule.module.css'
import dayjs from 'dayjs'
import BasicTimePicker from '../../../../../../components/UI/TimePicker/TimePicker'
import { Switch } from '../../../../../../components/UI/Switch/Switch'
import { Button } from '../../../../../../components/UI/Buttons/Button/Button'

export const AddFullSchedule = () => {
	const [scheduleData, setScheduleData] = useState({
		startDate: dayjs(new Date()).format('YYYY-MM-DD'),
		endDate: '',
		dayScheduleRequests: [
			{
				startTime: '',
				endTime: '',
				dayOfWeek: 'MONDAY',
				workingDay: false,
			},
			{
				startTime: '',
				endTime: '',
				dayOfWeek: 'TUESDAY',
				workingDay: false,
			},
			{
				startTime: '',
				endTime: '',
				dayOfWeek: 'WEDNESDAY',
				workingDay: false,
			},
			{
				startTime: '',
				endTime: '',
				dayOfWeek: 'THURSDAY',
				workingDay: false,
			},
			{
				startTime: '',
				endTime: '',
				dayOfWeek: 'FRIDAY',
				workingDay: false,
			},
			{
				startTime: '',
				endTime: '',
				dayOfWeek: 'SATURDAY',
				workingDay: false,
			},
			{
				startTime: '',
				endTime: '',
				dayOfWeek: 'SUNDAY',
				workingDay: false,
			},
		],
	})

	// console.log(scheduleData)
	return (
		<ModalComponent
			active={true}
			handleClose={() => false}
			title='Создать график'>
			<div className={styles.container_full_schedule}>
				<div className={styles.container_full_schedule_header}>
					<DataPicker
						value={scheduleData.startDate}
						onChange={(e: string) =>
							setScheduleData({
								...scheduleData,
								startDate: e,
							})
						}
					/>
					<DataPicker
						value={scheduleData.endDate}
						onChange={(e: string) =>
							setScheduleData({
								...scheduleData,
								endDate: e,
							})
						}
					/>
				</div>
				{FULL_WEEK.map((item: { nameEN: string; nameRU: string }) => {
					return (
						<div
							key={item.nameRU}
							className={styles.card_full_schedule}>
							<Switch
								checked={true}
								onChange={(e) => console.log(e)}
							/>
							<span>{item.nameRU}</span>
							<BasicTimePicker
								value={''}
								onChange={(e) => console.log(e)}
								minHours={0}
								maxHours={23}
								minutesStep={30}
							/>
							<BasicTimePicker
								value={''}
								onChange={(e) => console.log(e)}
								minHours={0}
								maxHours={23}
								minutesStep={30}
							/>
						</div>
					)
				})}
				<div className={styles.container_full_schedule_footer}>
					<Button>Отмена</Button>
					<Button>Применить к всем</Button>
					<Button>Сохранить</Button>
				</div>
			</div>
		</ModalComponent>
	)
}
