import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { TimePicker } from '@mui/x-date-pickers/TimePicker'
import { styled } from '@mui/material/styles'
import dayjs from 'dayjs'

interface BasixTimePickerProps {
	value: string
	onChange: (e: any) => void
	minHours: number
	maxHours: number
	minutesStep?: number
	disabled?: boolean
}

export default function BasicTimePicker({
	value,
	onChange,
	minHours,
	maxHours,
	minutesStep,
	disabled,
}: BasixTimePickerProps) {
	const today = new Date()
	const [hours, minutes, seconds] = value.split(':')

	today.setHours(parseInt(hours))
	today.setMinutes(parseInt(minutes))
	today.setSeconds(parseInt(seconds))

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<DemoContainer
				components={['TimePicker']}
				sx={{ overflow: 'initial', paddingTop: 0 }}>
				<StyledTimePicker
					value={dayjs(today)}
					onChange={(time: any) => {
						const formattedTime = dayjs(time).format('HH:mm:ss')
						onChange(formattedTime)
					}}
					ampm={false}
					className='time_picker'
					format='HH:mm'
					minTime={dayjs().set('hour', minHours)}
					maxTime={dayjs().set('hour', maxHours)}
					minutesStep={minutesStep}
					disabled={disabled}
					slotProps={{
						openPickerButton: {
							classes: { root: 'custom_adornment_icon_class' },
						},
						inputAdornment: {
							classes: {
								root: 'custom_adornment_class',
							},
						},
						actionBar: {
							sx: { display: 'none' },
						},
						popper: {
							sx: {
								'& .MuiList-root.MuiMultiSectionDigitalClock-root::after':
									{
										height: 0,
									},
							},
						},
						textField: {
							placeholder: '00:00',
							sx: {
								'&.MuiTextField-root': {
									minWidth: 0,
								},
							},
						},
						desktopPaper: {
							sx: {
								'& .MuiMultiSectionDigitalClock-root': {
									maxHeight: '140px',
								},
							},
						},
					}}
				/>
			</DemoContainer>
		</LocalizationProvider>
	)
}
const StyledTimePicker = styled(TimePicker)(() => ({
	'& .MuiInputBase-root': {
		width: '97px',
		height: '38px',
		borderRadius: '10px',
		overflowY: 'none',
		border: '1px solid #D9D9D9',
	},
	'& .MuiOutlinedInput-root': {
		paddingLeft: '9px',
		fontSize: '16px',
		fontWeight: 400,
	},
	'& .custom_adornment_class': {
		position: 'absolute',
		left: 0,
		top: 0,
		width: '100%',
		height: '100%',
		marginLeft: 0,
		maxHeight: '100%',
	},
	'& .custom_adornment_icon_class': {
		opacity: 0,
		width: '100%',
		display: 'block',
	},
	'.MuiOutlinedInput-notchedOutline': {
		border: 'none',
	},
}))
