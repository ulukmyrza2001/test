import Cookies from 'js-cookie'
import { SuperAdminRoutes } from './SuperAdminRoutes'
import { UserRoutes } from './UserRoutes'
import { MasterRoutes } from './MasterRoutes'
import { OwnerRoutes } from './OwnerRoutes'
// import { AdminRoutes } from './AdminRoutes'

export const AppRoutes = () => {
	const role = Cookies.get('role')
	const isAuthenticated = Cookies.get('isAuthenticated')

	if (isAuthenticated) {
		switch (role) {
			case 'SUPER_ADMIN':
				return <SuperAdminRoutes />
			case 'OWNER':
				return <OwnerRoutes />
			// case 'ADMIN':
			// 	return <AdminRoutes />
			case 'MASTER':
				return <MasterRoutes />
			case 'USER':
				return <UserRoutes />
			default:
				return <UserRoutes />
		}
	} else {
		return <UserRoutes />
	}
}
