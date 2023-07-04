import { useEffect } from 'react'
import { Container } from '../../../styles/ContainerStyle/Container'

export const HistoryPage = () => {
	useEffect(() => {
		document.title = 'History | Cheber'
		return () => {
			document.title = 'Cheber' // Reset the title when the component unmounts
		}
	}, [])
	return <Container>HistoryPage</Container>
}
