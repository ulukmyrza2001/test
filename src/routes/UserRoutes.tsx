import { Route, Routes } from 'react-router'
import { USER_ROUTES } from '../utils/constants/routes'
import { UserOutlet } from '../layout/user-outlet'
import { PartnerOutlet } from '../layout/partner-outlet'
// PAGE
import { UserPage } from '../pages/user'
import { PartnerPage } from '../pages/partner'
import { NotFoundPage } from '../pages/error/NotFoundPage'
import { ContactsPage } from '../pages/user/сontacts'

export const UserRoutes = () => {
	return (
		<Routes>
			<Route path={USER_ROUTES.DEFAULT.path} element={<UserOutlet />}>
				<Route path={USER_ROUTES.DEFAULT.path} element={<UserPage />} />
				<Route
					path={USER_ROUTES.CONTACTS.path}
					element={<ContactsPage />}
				/>
			</Route>
			<Route path={USER_ROUTES.PARTNER.path} element={<PartnerOutlet />}>
				<Route
					path={USER_ROUTES.PARTNER.path}
					element={<PartnerPage />}
				/>
			</Route>
			<Route
				path={USER_ROUTES.NOT_FOUND_PAGE.path}
				element={<NotFoundPage />}
			/>
		</Routes>
	)
}
