import { Navigate, Route, Routes } from 'react-router-dom'
import { SuperAdminOutlet } from '../layout/super-admin-outlet/Dashboard'
import { SuperAdminPage } from '../pages/super-admin'
import { SUPER_ADMIN_ROUTES } from '../utils/constants/routes'
import { AnnouncementsPage } from '../pages/super-admin/announcements'
import { CustomersPage } from '../pages/super-admin/customers'
import { SupportsPage } from '../pages/super-admin/supports'
import { TariffsPage } from '../pages/super-admin/tariffs'

export const SuperAdmin = () => {
	return (
		<Routes>
			<Route
				path={SUPER_ADMIN_ROUTES.DEFAULT.path}
				element={<SuperAdminOutlet />}
			>
				<Route
					path='/'
					element={
						<Navigate to={SUPER_ADMIN_ROUTES.DASHBOARD.path} />
					}
				/>
				<Route
					path={SUPER_ADMIN_ROUTES.DASHBOARD.path}
					element={<SuperAdminPage />}
				/>
				<Route
					path={SUPER_ADMIN_ROUTES.ANNOUNCEMENTS.path}
					element={<AnnouncementsPage />}
				/>
				<Route
					path={SUPER_ADMIN_ROUTES.CUSTOMERS.path}
					element={<CustomersPage />}
				/>
				<Route
					path={SUPER_ADMIN_ROUTES.SUPPORT.path}
					element={<SupportsPage />}
				/>
				<Route
					path={SUPER_ADMIN_ROUTES.TARIFFS.path}
					element={<TariffsPage />}
				/>
			</Route>
		</Routes>
	)
}
