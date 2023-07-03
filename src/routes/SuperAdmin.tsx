import { Route, Routes } from 'react-router'
import { AdminOutlet } from '../layout/admin-outlet/Dashboard'
import { SuperAdminPage } from '../pages/super-admin'
import { SUPER_ADMIN_ROUTES } from '../utils/constants/routes'

export const SuperAdmin = () => {
	return (
		<Routes>
			<Route
				path={SUPER_ADMIN_ROUTES.DEFAULT.path}
				element={<AdminOutlet />}
			>
				<Route
					path={SUPER_ADMIN_ROUTES.DASHBOARD.path}
					element={<SuperAdminPage />}
				/>
			</Route>
		</Routes>
	)
}
