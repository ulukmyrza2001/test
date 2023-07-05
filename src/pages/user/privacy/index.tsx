import { useEffect } from 'react'
import { Container } from '../../../styles/ContainerStyle/Container'

export const PrivacyPage = () => {
	useEffect(() => {
		document.title = 'Privacy | Cheber'
		return () => {
			document.title = 'Cheber' // Reset the title when the component unmounts
		}
	}, [])
	return <Container>privacy</Container>
}
