import { Route, Routes } from 'react-router'
import { AdminOutlet } from '../layout/admin-outlet/Dashboard'
import { ADMIN_ROUTES } from '../utils/constants/routes'
import { Calendar } from '../pages/admin/Calendar/Calendar'
import { Master } from '../pages/admin/Master/MasterPage/MasterPage'
import { Services } from '../pages/admin/Services/ServicesPage/ServicesPage'

export const AdminRoutes = () => {
	return (
		<Routes>
			<Route path={ADMIN_ROUTES.DEFAULT.path} element={<AdminOutlet />}>
				<Route
					path={ADMIN_ROUTES.DEFAULT.path}
					element={<Calendar />}
				/>
				<Route path={ADMIN_ROUTES.MASTER.path} element={<Master />} />
				<Route
					path={ADMIN_ROUTES.SERVICES.path}
					element={<Services />}
				/>
			</Route>
		</Routes>
	)
}
