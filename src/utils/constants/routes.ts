export const ROUTES = {
	GUEST: {
		path: '/',
	},
	NOT_FOUND_PAGE: {
		path: '*',
	},
}
export const SUPER_ADMIN_ROUTES = {
	DEFAULT: {
		path: '/',
	},
	DASHBOARD: {
		path: '/dashboard',
	},
	COMPANY: {
		path: '/company',
	},
	CREATE_COMPANY: {
		path: '/company/create',
	},
	ANNOUNCEMENTS: {
		path: '/announcements',
	},
	TARIFFS: {
		path: '/tariffs',
	},
	SUPPORT: {
		path: '/supports',
	},
	NEW_CLIENT: {
		path: '/clients/create-client',
	},
}
export const ADMIN_ROUTES = {
	DEFAULT: {
		path: '/',
	},
	MASTERS: {
		path: '/masters',
	},
	MASTER: {
		path: '/master/:masterID',
	},
	MASTER_APPOINTMENT: {
		path: '/master/:masterID/appoinments',
	},
	MASTER_REWIEVS: {
		path: '/master/:masterID/rewievs',
	},
	SERVICES: {
		path: '/services',
	},
}

export const USER_ROUTES = {
	DEFAULT: {
		path: '/',
	},
	NOT_FOUND_PAGE: {
		path: '*',
	},
	PROFILE: {
		path: '/profile',
	},
	HISTORY: {
		path: '/history',
	},
	PARTNER: {
		path: '/partner',
	},
	CONTACTS: {
		path: '/contacts',
	},

	FILTER: {
		path: '/filter/:id',
	},
	PRIVACY: {
		path: '/privacy',
	},
	TERMS: {
		path: '/terms',
	},
	BARBER: {
		path: '/barber/:branchId',
	},
	APPOINTMENT_BARBER: {
		path: '/:id/barber/usluga/:id',
	},
	BEAUTY_SALON: {
		path: '/beauty-salon',
	},
}

export const MASTER_ROUTES = {
	DEFAULT: {
		path: '/',
	},
	DASHBOARD: {
		path: '/dashboard',
	},
	USERS: {
		path: '/users',
	},
	ANNOUNCEMENTS: {
		path: '/announcements',
	},
	SUPPORT: {
		path: '/supports',
	},
}

export const OWNER_ROUTES = {
	DEFAULT: {
		path: '/',
	},
	DASHBOARD: {
		path: '/dashboard',
	},
	AFFILIATE: {
		path: '/affiliate',
	},
	AFFILIATECREATE: {
		path: '/affiliate/create',
	},
	ADMINS: {
		path: '/admins',
	},
	ADMINSCREATE: {
		path: '/admins/create',
	},
	SUPPORT: {
		path: '/supports',
	},
}
