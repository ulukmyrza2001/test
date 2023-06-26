'use client'
import styles from './Footer.module.css'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner_footer}>
        <div className={styles.wrapper_links}>
          <Link href="/" className={styles.logo}>
            Чебер
          </Link>
          <p className="text">
            Сервис онлайн бронирования в <br /> сфере красоты и здоровья.
          </p>
        </div>
        <div className={styles.wrapper_links}>
          <Link href="/">
            <p className="text">Стать партнером</p>
          </Link>
          <Link href="/">
            <p className="text">Контакты</p>
          </Link>
          <Link href="/">
            <p className="text">Карта сайта</p>
          </Link>
        </div>
        <div className={styles.wrapper_links}>
          <Link href="/">
            <p className="text">Стать партнером</p>
          </Link>
          <Link href="/">
            <p className="text">Контакты</p>
          </Link>
          <Link href="/">
            <p className="text">Карта сайта</p>
          </Link>
        </div>
        <div className={styles.wrapper_links}>
          <Link href="/">
            <p className="text">Стать партнером</p>
          </Link>
          <Link href="/">
            <p className="text">Контакты</p>
          </Link>
          <Link href="/">
            <p className="text">Карта сайта</p>
          </Link>
        </div>
      </div>
    </footer>
  )
}
