import { Route, Routes } from 'react-router'
import { ADMIN_ROUTES } from '../utils/constants/routes'
import { DashboardOutlet } from '../layout/dashboard/Dashboard'
import { Calendar } from '../pages/admin/calendar/Calendar'
import { MasterPage } from '../pages/admin/master/masterPage/MasterPage'
import { MasterInnerPage } from '../pages/admin/master/masterInnerPage/MasterInnerPage'
import { Appointments } from '../pages/admin/master/masterInnerPage/appointments/Appointments'
import { Rewievs } from '../pages/admin/master/masterInnerPage/rewievs/Rewievs'
import { Services } from '../pages/admin/services/servicesPage/ServicesPage'

export const AdminRoutes = () => {
	return (
		<Routes>
			<Route path={ADMIN_ROUTES.DEFAULT.path} element={<DashboardOutlet />}>
				<Route path={ADMIN_ROUTES.DEFAULT.path} element={<Calendar/>} />
				<Route path={ADMIN_ROUTES.MASTERS.path} element={<MasterPage />} />
				<Route path={ADMIN_ROUTES.MASTER.path} element={<MasterInnerPage />}>
					<Route
						path={ADMIN_ROUTES.MASTER_APPOINTMENT.path}
						element={<Appointments />}
					/>
					<Route
						path={ADMIN_ROUTES.MASTER_REWIEVS.path}
						element={<Rewievs />}
					/>
				</Route>
				<Route path={ADMIN_ROUTES.SERVICES.path} element={<Services />} />
			</Route>
		</Routes>
	)
}
