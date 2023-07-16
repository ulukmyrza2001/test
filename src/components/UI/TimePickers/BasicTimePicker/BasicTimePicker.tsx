import dayjs from 'dayjs'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { TimePicker } from '@mui/x-date-pickers/TimePicker'
import 'dayjs/locale/ru'

interface BasicTimePickerProps {
	value: string
	onChange: (e: any) => void
	label: string
	disabled: boolean
}

export const BasicTimePicker = ({
	value,
	onChange,
	disabled,
	label,
}: BasicTimePickerProps) => {
	const today = new Date()
	const [hours, minutes, seconds] = value.split(':')

	today.setHours(parseInt(hours))
	today.setMinutes(parseInt(minutes))
	today.setSeconds(parseInt(seconds))

	return (
		<div>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<DemoContainer components={['TimePicker']}>
					<TimePicker
						sx={{ width: '100px' }}
						label={label}
						value={dayjs(today)}
						ampm={false}
						onChange={(time: any) => {
							const formattedTime = dayjs(time).format('HH:mm:ss')
							onChange(formattedTime)
						}}
						disabled={disabled}
						slotProps={{
							textField: {
								placeholder: '00:00',
								sx: {
									'&.MuiTextField-root': {
										width: '100%',
										minWidth: '100px',
										zIndex: 0,
									},
								},
							},
						}}
						format='HH:mm'
					/>
				</DemoContainer>
			</LocalizationProvider>
		</div>
	)
}
