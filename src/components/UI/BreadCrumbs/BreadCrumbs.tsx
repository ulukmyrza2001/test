<<<<<<< HEAD
import React from 'react'
=======
import styles from './BreadCrumbs.module.css'
>>>>>>> e89b095b6028ea1c2640fdc4b6540109edeccd19
import Link from 'next/link'
import { Breadcrumbs } from '@mui/material'
import { ThreeDots } from 'react-loader-spinner'
import style from './BreadCrumbs.module.css'

export function BreadCrumbs({ paths }: any) {
  return (
<<<<<<< HEAD
    <Breadcrumbs aria-label="breadcrumbs" separator="/" className={style.breadcrumbs}>
      {paths.map((path: any, index: number) => {
        const lastIndex = index === paths.length - 1
        return lastIndex ? (
          <div key={path.path} className={style.titlecontainer}>
=======
    <Breadcrumbs className={styles.breadcrumbs} aria-label="breadcrumbs" separator="/">
      {paths.map((path: any, index: number) => {
        const lastIndex = index === paths.length - 1
        return lastIndex ? (
          <div className={styles.wrapper_title} key={path.path}>
>>>>>>> e89b095b6028ea1c2640fdc4b6540109edeccd19
            {path.isLoading ? (
              <ThreeDots
                height="30"
                width="30"
                radius="9"
                color="gray"
                ariaLabel="three-dots-loading"
                visible={true}
              />
            ) : (
              path.name
            )}
          </div>
        ) : (
          <Link key={path.path} href={path.to} passHref>
<<<<<<< HEAD
            <a className={style.navlink}>
=======
            <a className={styles.link}>
>>>>>>> e89b095b6028ea1c2640fdc4b6540109edeccd19
              {path.isLoading ? (
                <ThreeDots
                  height="30"
                  width="30"
                  radius="9"
                  color="gray"
                  ariaLabel="three-dots-loading"
                  visible={true}
                />
              ) : (
                path.name
              )}
            </a>
          </Link>
        )
      })}
    </Breadcrumbs>
  )
}
