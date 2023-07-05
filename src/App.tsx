import { useEffect } from 'react'
import { AppRoutes } from './routes/AppRoutes'
import { useSelector } from 'react-redux'

function App() {
	const { token, role, isAuthenticated } = useSelector(
		(state: any) => state.auth,
	)

	useEffect(() => {
		if (token) {
			document.cookie = `role=${role}; path=/`
			document.cookie = `token=${token}; path=/`
			document.cookie = `isAuthenticated=${isAuthenticated}; path=/`
		}
	}, [token, role])

	return <div>{AppRoutes() || null}</div>
}

export default App
