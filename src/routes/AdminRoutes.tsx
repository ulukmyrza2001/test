import { Route, Routes } from 'react-router'
import { AdminOutlet } from '../layout/admin-outlet/Dashboard'
import { AdminPage } from '../pages/admin'
import { ADMIN_ROUTES } from '../utils/constants/routes'

export const AdminRoutes = () => {
	return (
		<Routes>
			<Route path={ADMIN_ROUTES.DEFAULT.path} element={<AdminOutlet />}>
				<Route
					path={ADMIN_ROUTES.DASHBOARD.path}
					element={<AdminPage />}
				/>
			</Route>
		</Routes>
	)
}
