import { Fragment } from 'react'
import { PartnerHeader } from '../../components/layout/Header/PartnerHeader/PartnerHeader'
import { Outlet } from 'react-router'
import { Footer } from '../../components/layout/Footer/Footer'

export const PartnerOutlet = () => {
	return (
		<Fragment>
			<PartnerHeader />
			<main className='main'>
				<Outlet />
			</main>
			<Footer />
		</Fragment>
	)
}
