export const _KEY_AUTH = 'USER_CHEBER_DATA'

export const WEEK = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

export const APPOINTMENT_STATUS = [
	{
		label: 'Подтвержден',
		value: 'CONFIRMED',
	},
	{
		label: 'Пришел',
		value: 'ARRIVE',
	},
	{
		label: 'Завершенный',
		value: 'COMPLETED',
	},
	{
		label: 'Отменен',
		value: 'CANCELED',
	},
]

export const FULL_WEEK = [
	{
		nameEN: 'MONDAY',
		nameRU: 'Понедельник',
	},
	{
		nameEN: 'TUESDAY',
		nameRU: 'Вторник',
	},
	{
		nameEN: 'WEDNESDAY',
		nameRU: 'Среда',
	},
	{
		nameEN: 'THURSDAY',
		nameRU: 'Четверг',
	},
	{
		nameEN: 'FRIDAY',
		nameRU: 'Пятница',
	},
	{
		nameEN: 'SATURDAY',
		nameRU: 'Суббота',
	},
	{
		nameEN: 'SUNDAY',
		nameRU: 'Воскресенье',
	},
]
//----
export const calendarTimeFormat = {
	hour: 'numeric',
	minute: '2-digit',
}

export const headerToolbar = {
	left: 'prev,dayGridMonth,timeGridWeek',
	center: 'title',
	right: 'today,timeGridDay,listWeek,next',
}

export const translatebuttonText = {
	today: 'Сегодня',
	day: 'День',
	month: 'Месяц',
	week: 'Неделя',
	list: 'Список',
}

export const isLoadingSx = {
	color: '#fff',
	zIndex: (theme: any) => theme.zIndex.drawer + 1,
}
