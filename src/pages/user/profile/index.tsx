import { useEffect } from 'react'
import { Container } from '../../../styles/ContainerStyle/Container'

export const ProfilePage = () => {
	useEffect(() => {
		document.title = 'Profile | Cheber'
		return () => {
			document.title = 'Cheber' // Reset the title when the component unmounts
		}
	}, [])
	return <Container>ProfilePage</Container>
}