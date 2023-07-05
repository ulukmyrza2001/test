import { useEffect } from 'react'
import { AdminRoutes } from './AdminRoutes'
import { SuperAdmin } from './SuperAdmin'
import { UserRoutes } from './UserRoutes'
import Cookies from 'js-cookie'
import { useSelector } from 'react-redux'

export const AppRoutes = () => {
	const { isAuthenticated } = useSelector((state: any) => state.auth)

	const role = Cookies.get('role')

	if (isAuthenticated) {
		return <UserRoutes />
	}

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
}
