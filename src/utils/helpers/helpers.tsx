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

<<<<<<< HEAD
export const TypeCompanyGenrate = (item: string) => {
	switch (item) {
		case 'barbershop':
			return 'Барбер'
		case 'beauty_salon':
			return 'Салон красоты'

		default:
			break
=======
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
>>>>>>> bef97c8526e172977ec36753e31d468f02211b6e
	}
}
