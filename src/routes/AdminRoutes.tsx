import { Route, Routes } from 'react-router'
import { AdminOutlet } from '../layout/admin-outlet/Dashboard'
import { AdminPage } from '../pages/admin'

const ADMIN_ROUTES = {
	DEFAULT: {
		path: '/',
	},
	DASHBOARD: {
		path: '/dashboard',
	},
}

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
