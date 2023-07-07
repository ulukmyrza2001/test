import { Route, Routes } from 'react-router'
import { ADMIN_ROUTES } from '../utils/constants/routes'
import { DashboardOutlet } from '../layout/dashboard/Dashboard'
import { MasterPage } from '../pages/admin/master/masterPage/MasterPage'
import { Services } from '../pages/admin/services/servicesPage/ServicesPage'
import { Calendar } from '../pages/admin/calendar/Calendar'
import { MasterInnerPage } from '../pages/admin/master/masterInnerPage/MasterInnerPage'

export const AdminRoutes = () => {
	return (
		<Routes>
			<Route
				path={ADMIN_ROUTES.DEFAULT.path}
				element={<DashboardOutlet />}>
				<Route
					path={ADMIN_ROUTES.DEFAULT.path}
					element={<Calendar />}
				/>
				<Route
					path={ADMIN_ROUTES.MASTERS.path}
					element={<MasterPage />}
				/>
				<Route
					path={ADMIN_ROUTES.MASTER.path}
					element={<MasterInnerPage />}
				/>
				<Route
					path={ADMIN_ROUTES.SERVICES.path}
					element={<Services />}
				/>
			</Route>
		</Routes>
	)
}
