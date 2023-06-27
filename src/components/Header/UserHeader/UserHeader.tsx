'use client'
import { useState } from 'react'
import Link from 'next/link'
import styles from './UserHeader.module.css'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import LoginForm from '../../LoginForm/LoginForm'
import { ModalComponent } from '../../UI/Modal/Modal'

export const UserHeader = () => {
  const [showModal, setShowModal] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)

  const showModalHandler = () => {
    setShowModal(true)
  }
  const hideModalHandler = () => {
    setShowModal(false)
  }

  return (
    <header className={styles.header}>
      <div className={styles.inner_header}>
        <div>
          <Link href="/" className={styles.logo}>
            Чебер
          </Link>
        </div>
        <div className={styles.wrapper_nav}>
          <div className={styles.wrapper_located} onClick={() => showModalHandler()}>
            <LocationOnIcon />
            Бишкек
          </div>
          <ModalComponent active={showModal} handleClose={hideModalHandler}>
            asd
          </ModalComponent>
          <Link href="/partner">Стать партнером</Link>
          <div className={styles.wrapper_located} onClick={() => setShowLoginModal(true)}>
            Войти
          </div>
          <LoginForm active={showLoginModal} setActive={setShowLoginModal} />
        </div>
      </div>
    </header>
  )
}
