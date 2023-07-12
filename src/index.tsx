import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store'
import { Provider } from 'react-redux'
import { Natification } from './components/Natification/Natification'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<BrowserRouter>
		<Provider store={store}>
			<React.StrictMode>
				<Natification>
					<App />
				</Natification>
			</React.StrictMode>
		</Provider>
	</BrowserRouter>,
)
