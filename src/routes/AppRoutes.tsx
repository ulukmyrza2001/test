import { lazy } from 'react'
import { AdminRoutes } from './AdminRoutes'
import { SuperAdmin } from './SuperAdmin'
import { UserRoutes } from './UserRoutes'

export const AppRoutes = () => {
	const role = 'USER'

	switch (role) {
		// case 'SUPER_ADMIN':
		// 	return <SuperAdmin />
		// case 'OWNER':
		// 	return <AdminRoutes />
		// case 'ADMIN':
		// 	return <AdminRoutes />
		case 'USER':
			return <UserRoutes />

		default:
			return <UserRoutes />
	}
}
