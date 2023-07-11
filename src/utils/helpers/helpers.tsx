export function TranslateWeekShort(name: string) {
	switch (name) {
		case 'MONDAY':
			return 'Пн'
		case 'TUESDAY':
			return 'Вт'
		case 'WEDNESDAY':
			return 'Ср'
		case 'THURSDAY':
			return 'Чт'
		case 'FRIDAY':
			return 'Пт'
		case 'SATURDAY':
			return 'Сб'
		case 'SUNDAY':
			return 'Вс'
	}
}

export function TranslateAppointmentStatus(name: string) {
	switch (name) {
		case 'CONFIRMED':
			return 'Подтвержден'
		case 'ARRIVE':
			return 'Пришел'
		case 'COMPLETED':
			return 'Завершенный'
		case 'CANCELED':
			return 'Отменен'
		default:
			return 'Подтвержден'
	}
}
