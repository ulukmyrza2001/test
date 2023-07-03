import { useState } from 'react'
import styles from './UserHeader.module.css'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import LoginForm from '../../../LoginForm/LoginForm'
import { ModalComponent } from '../../../UI/Modal/Modal'
import { FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const UserHeader = () => {
	const [showModal, setShowModal] = useState(false)
	const [showLoginModal, setShowLoginModal] = useState(false)

	const showModalHandler = () => {
		setShowModal(true)
	}
	const hideModalHandler = () => {
		setShowModal(false)
	}

	const phoneNumber = ''

	return (
		<header className={styles.header}>
			<div className={styles.inner_header}>
				<div>
					<Link to='/' className={styles.logo}>
						Чебер
					</Link>
				</div>
				<div className={styles.wrapper_nav}>
					<div
						className={styles.wrapper_located}
						onClick={() => showModalHandler()}
					>
						<LocationOnIcon />
						Бишкек
					</div>
					<ModalComponent
						active={showModal}
						handleClose={hideModalHandler}
					>
						asd
					</ModalComponent>
					<Link to='/partner'>Стать партнером</Link>
					{phoneNumber ? (
						<Link to='/profile'>
							<FaUserCircle
								color='grey'
								fontSize='28px'
								cursor='pointer'
							/>
						</Link>
					) : (
						<div
							className={styles.wrapper_located}
							onClick={() => setShowLoginModal(true)}
						>
							Войти
						</div>
					)}
					<LoginForm
						active={showLoginModal}
						setActive={setShowLoginModal}
					/>
				</div>
			</div>
		</header>
	)
}
