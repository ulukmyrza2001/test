import Cookies from 'js-cookie'
import { OwnerPage } from '../pages/owner'
import { MasterPage } from '../pages/master'
import { AdminRoutes } from './AdminRoutes'
import { SuperAdmin } from './SuperAdmin'
import { UserRoutes } from './UserRoutes'

export const AppRoutes = () => {
	const role = Cookies.get('role')
	const isAuthenticated = Cookies.get('isAuthenticated')

	if (isAuthenticated) {
		switch (role) {
			case 'SUPER_ADMIN':
				return <SuperAdmin />
			case 'OWNER':
				return <OwnerPage />
			case 'ADMIN':
				return <AdminRoutes />
			case 'MASTER':
				return <MasterPage />
			case 'USER':
				return <UserRoutes />
			default:
				return <UserRoutes />
		}
	} else {
		return <UserRoutes />
	}
}
