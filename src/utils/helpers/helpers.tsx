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

export const TypeCompanyGenrate = (item: string) => {
	switch (item) {
		case 'barbershop':
			return 'Барбер'
		case 'beauty_salon':
			return 'Салон красоты'

		default:
			break
	}
}
