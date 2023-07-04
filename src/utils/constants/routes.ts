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
	ANNOUNCEMENTS: {
		path: 'announcements',
	},
	CUSTOMERS: {
		path: 'customers',
	},
	TARIFFS: {
		path: 'tariffs',
	},
	SUPPORT: {
		path: 'supports',
	},
	NEW_CLIENT: {
		path: 'clients/create-client',
	},
}
export const ADMIN_ROUTES = {
	DEFAULT: {
		path: '/',
	},
	MASTER: {
		path: '/masters',
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
	BRANCHS: {
		path: '/:id',
	},
}
