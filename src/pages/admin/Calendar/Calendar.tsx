import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

export const Calendar = () => {
	return (
		<div style={{ width: '100%' }}>
			<FullCalendar
				plugins={[dayGridPlugin]}
				initialView='dayGridMonth'
				height={700}
			/>
		</div>
	)
}
