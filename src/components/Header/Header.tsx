'use client'
import Link from 'next/link'
import styles from './Header.module.css'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { useState } from 'react'
import { ModalComponent } from '../UI/Modal/Modal'

export const Header = () => {
  const [showmodal, setShowModal] = useState(false)

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
          <ModalComponent active={showmodal} handleClose={hideModalHandler}>
            asd
          </ModalComponent>
          <Link href="partner">Стать партнером</Link>
          <Link href="login">Войти</Link>
        </div>
      </div>
    </header>
  )
}
