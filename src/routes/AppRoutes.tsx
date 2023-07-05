import Cookies from 'js-cookie'
import { useSelector } from 'react-redux'
import { SuperAdmin } from './SuperAdmin'
import { OwnerPage } from '../pages/owner'
import { AdminRoutes } from './AdminRoutes'
import { MasterPage } from '../pages/master'
import { UserRoutes } from './UserRoutes'

export const AppRoutes = () => {
	const { isAuthenticated } = useSelector((state: any) => state.auth)

	const role = Cookies.get('role')

	if (isAuthenticated) {
		return <UserRoutes />
	}

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
}
