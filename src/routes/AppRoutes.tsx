import { AdminRoutes } from './AdminRoutes'
import { SuperAdmin } from './SuperAdmin'
import { UserRoutes } from './UserRoutes'

export const AppRoutes = () => {
	const role = 'ADMIN'

	switch (role) {
		// case 'SUPER_ADMIN':
		// 	return <SuperAdmin />
		case 'ADMIN':
			return <AdminRoutes />
		// case 'USER':
		// 	return <UserRoutes />
		default:
			return <UserRoutes />
	}
}
