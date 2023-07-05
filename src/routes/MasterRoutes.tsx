import { Navigate, Route, Routes } from 'react-router-dom'
import { MASTER_ROUTES } from '../utils/constants/routes'
import { AnnouncementsPage } from '../pages/master/announcements'
import { UsersPage } from '../pages/master/users'
import { SupportsPage } from '../pages/master/supports'
import { MasterOutlet } from '../layout/master-layout/Dashboard'
import { MasterPage } from '../pages/master'

export const MasterRoutes = () => {
	return (
		<Routes>
			<Route path={MASTER_ROUTES.DEFAULT.path} element={<MasterOutlet />}>
				<Route
					path='/'
					element={<Navigate to={MASTER_ROUTES.DASHBOARD.path} />}
				/>
				<Route
					path={MASTER_ROUTES.DASHBOARD.path}
					element={<MasterPage />}
				/>
				<Route
					path={MASTER_ROUTES.USERS.path}
					element={<UsersPage />}
				/>
				<Route
					path={MASTER_ROUTES.ANNOUNCEMENTS.path}
					element={<AnnouncementsPage />}
				/>
				<Route
					path={MASTER_ROUTES.SUPPORT.path}
					element={<SupportsPage />}
				/>
			</Route>
		</Routes>
	)
}
