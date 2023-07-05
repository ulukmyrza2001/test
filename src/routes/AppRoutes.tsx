import Cookies from 'js-cookie'
import { OwnerPage } from '../pages/owner'
import { AdminRoutes } from './AdminRoutes'
import { SuperAdminRoutes } from './SuperAdminRoutes'
import { UserRoutes } from './UserRoutes'
import { MasterRoutes } from './MasterRoutes'

export const AppRoutes = () => {
	const role = Cookies.get('role')
	const isAuthenticated = Cookies.get('isAuthenticated')

	if (isAuthenticated) {
		switch (role) {
			case 'SUPER_ADMIN':
				return <SuperAdminRoutes />
			case 'OWNER':
				return <OwnerPage />
			case 'ADMIN':
				return <AdminRoutes />
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
