import { Fragment } from 'react'
import { Footer } from '../../components/layout/Footer/Footer'
import { UserHeader } from '../../components/layout/Header/UserHeader/UserHeader'
import { Outlet } from 'react-router'

export const UserOutlet = () => {
	return (
		<Fragment>
			<UserHeader />
			<main className='main'>
				<Outlet />
			</main>
			<Footer />
		</Fragment>
	)
}
