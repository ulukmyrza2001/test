import { useEffect } from 'react'
import { AppRoutes } from './routes/AppRoutes'
import { useSelector } from 'react-redux'

function App() {
	const { token, role } = useSelector((state: any) => state.auth)

	useEffect(() => {
		if (token) {
			document.cookie = `role=${role}; path=/`
			document.cookie = `token=${token}; path=/`
		}
	}, [token, role])

	return (
		<div>
			<AppRoutes />
		</div>
	)
}

export default App
