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

export const filterArrayThroughIDBeforeArray = (
	arr: any,
	id: number,
	idname: string,
	label: string,
) => {
	if (arr.length !== 0) {
		const object = arr?.filter((el: any) => el[idname] === id)[0]
		const labelAll = label.split('-')
		if (object) {
			if (labelAll.length >= 2) {
				return {
					label: labelAll.map((item: any) => {
						return `${object[item]} `
					}),
					value: object[idname],
				}
			} else {
				return { label: object[label], value: object[idname] }
			}
		} else {
			return null
		}
	} else {
		return null
	}
}

export const translateObject = (item: any) => {
	if (item) {
		if (item?.length === undefined) {
			return item.value || item.id
		} else {
			return item.map(
				(el: { label: string | number; value: number }) => el.value,
			)
		}
	} else {
		return ''
	}
}

export function calculateEndTime(
	startTime: string,
	fullDuration: number,
): string {
	const [startHours, startMinutes] = startTime.split(':').map(Number)
	let hours = Math.floor(fullDuration / 60)
	let minutes = fullDuration % 60
	let endHours = startHours + hours
	let endMinutes = startMinutes + minutes
	if (endMinutes >= 60) {
		endMinutes -= 60
		endHours++
	}
	const formattedEndHours = endHours.toString().padStart(2, '0')
	const formattedEndMinutes = endMinutes.toString().padStart(2, '0')
	const endTime = `${formattedEndHours}:${formattedEndMinutes}:00`
	return endTime
}

export const countDuration = (arr: any) => {
	if (Array.isArray(arr) && arr.length !== 0) {
		const value = arr.reduce(
			(
				acc: number,
				item: {
					label: string | number
					value: number
					duration: number
				},
			) => acc + item.duration,
			0,
		)
		return value
	} else {
		return 0
	}
}
