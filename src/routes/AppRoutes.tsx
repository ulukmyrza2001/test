import { AdminRoutes } from './AdminRoutes'
import { SuperAdmin } from './SuperAdmin'
import { UserRoutes } from './UserRoutes'
import Cookies from 'js-cookie'

export const AppRoutes = () => {
	const role = Cookies.get('role')
	const isAuthenticated = Cookies.get('isAuthenticated')

	if (isAuthenticated) {
		switch (role) {
			case 'SUPER_ADMIN':
				return <SuperAdmin />
			case 'ADMIN':
				return <AdminRoutes />
			case 'USER':
				return <UserRoutes />

			default:
				return <UserRoutes />
		}
	} else {
		return <UserRoutes />
	}
}
