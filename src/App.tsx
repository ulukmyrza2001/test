import './index.css'
import { useEffect } from 'react'
import { AppRoutes } from './routes/AppRoutes'
import { useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'

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

	const { pathname } = useLocation()
	const path = pathname.split('/')[1]

	return <div className={`App ${path}`}>{AppRoutes() || null}</div>
}

export default App
