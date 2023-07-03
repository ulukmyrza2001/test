import React from 'react'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs from 'dayjs'
import 'dayjs/locale/ru'

dayjs.locale('ru')

interface IdataPicker {
	value: any
	onChange: any
}
export const DataPicker = ({ value, onChange }: IdataPicker) => {
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<DemoContainer components={['DatePicker']}>
				<DatePicker
					label='Дата'
					value={value}
					onChange={onChange}
					format='DD.MM.YYYY'
				/>
			</DemoContainer>
		</LocalizationProvider>
	)
}
