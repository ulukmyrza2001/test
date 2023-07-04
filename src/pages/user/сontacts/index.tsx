import { useEffect } from 'react'
import { Container } from '../../../styles/ContainerStyle/Container'

export const ContactsPage = () => {
	useEffect(() => {
		document.title = 'Contacts | Cheber'
		return () => {
			document.title = 'Cheber' // Reset the title when the component unmounts
		}
	}, [])
	return <Container>ContactsPage</Container>
}
