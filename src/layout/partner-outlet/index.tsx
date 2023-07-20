import { useEffect } from 'react'
import { PartnerHeader } from '../../components/layout/Header/PartnerHeader/PartnerHeader'
import { Outlet } from 'react-router'
import { Footer } from '../../components/layout/Footer/Footer'

export const PartnerOutlet = () => {
	useEffect(() => {
		document.title = 'Partner'
		return () => {
			document.title = 'Cheber' // Reset the title when the component unmounts
		}
	}, [])
	return (
		<>
			<PartnerHeader />
			<main className="main">
				<Outlet />
			</main>
			<Footer />
		</>
	)
}
