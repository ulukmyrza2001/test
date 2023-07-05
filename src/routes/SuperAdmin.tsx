import { Navigate, Route, Routes } from 'react-router-dom'
import { SuperAdminOutlet } from '../layout/super-admin-outlet/Dashboard'
import { SuperAdminPage } from '../pages/super-admin'
import { SUPER_ADMIN_ROUTES } from '../utils/constants/routes'
import { AnnouncementsPage } from '../pages/super-admin/announcements'
import { СompanyPage } from '../pages/super-admin/company'
import { SupportsPage } from '../pages/super-admin/supports'
import { TariffsPage } from '../pages/super-admin/tariffs'
import { CreateCompany } from '../pages/super-admin/company/create-company'

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
					path={SUPER_ADMIN_ROUTES.COMPANY.path}
					element={<СompanyPage />}
				/>
				<Route
					path={SUPER_ADMIN_ROUTES.CREATE_COMPANY.path}
					element={<CreateCompany />}
				/>
				<Route
					path={SUPER_ADMIN_ROUTES.ANNOUNCEMENTS.path}
					element={<AnnouncementsPage />}
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
