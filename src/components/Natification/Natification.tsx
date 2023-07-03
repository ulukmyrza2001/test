import { FC, ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'

interface ProvidersProps {
	children: ReactNode
}

export const Natification: FC<ProvidersProps> = ({ children }) => {
	return (
		<>
			<Toaster position='top-center' reverseOrder={false} />
			{children}
		</>
	)
}

// toast.success('Successfully toasted!')
// toast.error("This didn't work.")
