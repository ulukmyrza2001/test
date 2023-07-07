import { Route, Routes } from 'react-router'
import { USER_ROUTES } from '../utils/constants/routes'
import { UserOutlet } from '../layout/user-outlet'
import { PartnerOutlet } from '../layout/partner-outlet'
// PAGE
import { UserPage } from '../pages/user'
import { PartnerPage } from '../pages/partner'
import { NotFoundPage } from '../pages/error/error-404/NotFoundPage'
import { ContactsPage } from '../pages/user/сontacts'
import { ProfilePage } from '../pages/user/profile'
import { HistoryPage } from '../pages/user/history'
import { BarberPage } from '../pages/user/barber'
import { PrivacyPage } from '../pages/user/privacy'
import { TermsPage } from '../pages/user/terms'
import { FilterPage } from '../pages/user/filter'
import { BeautySalonPage } from '../pages/user/beauty-salon'
import { AppointmenBarberPage } from '../pages/user/barber/appointment'

export const UserRoutes = () => {
	return (
		<Routes>
			<Route path={USER_ROUTES.DEFAULT.path} element={<UserOutlet />}>
				<Route path={USER_ROUTES.DEFAULT.path} element={<UserPage />} />
				<Route
					path={USER_ROUTES.CONTACTS.path}
					element={<ContactsPage />}
				/>
				<Route
					path={USER_ROUTES.PROFILE.path}
					element={<ProfilePage />}
				/>
				<Route
					path={USER_ROUTES.HISTORY.path}
					element={<HistoryPage />}
				/>
				<Route
					path={USER_ROUTES.FILTER.path}
					element={<FilterPage />}
				/>
				<Route
					path={USER_ROUTES.PRIVACY.path}
					element={<PrivacyPage />}
				/>
				<Route
					path={USER_ROUTES.BARBER.path}
					element={<BarberPage />}
				/>
				<Route
					path={USER_ROUTES.APPOINTMENT_BARBER.path}
					element={<AppointmenBarberPage />}
				/>
				<Route
					path={USER_ROUTES.BEAUTY_SALON.path}
					element={<BeautySalonPage />}
				/>
				<Route path={USER_ROUTES.TERMS.path} element={<TermsPage />} />
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
