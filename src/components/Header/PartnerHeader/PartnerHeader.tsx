'use client'
import Link from 'next/link'
import styles from './PartnerHeader.module.css'

export const PartnerHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.inner_header}>
        <div>
          <Link href="/" className={styles.logo}>
            Чебер
          </Link>
        </div>
        <div className={styles.wrapper_nav}>
          <Link href="/partner">Возможности программы</Link>
          <Link href="/partner">Zapis в цифрах</Link>
          <Link href="/partner">Онлайн запись</Link>
          <Link href="/partner">Тарифы</Link>
          <Link href="/partner">Нас рекомендуют</Link>
          <Link href="/partner">Контакты</Link>
        </div>
      </div>
    </header>
  )
}
