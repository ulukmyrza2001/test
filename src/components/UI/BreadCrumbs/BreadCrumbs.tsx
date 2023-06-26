import styles from './BreadCrumbs.module.css'
import Link from 'next/link'
import { Breadcrumbs } from '@mui/material'
import { ThreeDots } from 'react-loader-spinner'

export function BreadCrumbs({ paths }: any) {
  return (
    <Breadcrumbs className={styles.breadcrumbs} aria-label="breadcrumbs" separator="/">
      {paths.map((path: any, index: number) => {
        const lastIndex = index === paths.length - 1
        return lastIndex ? (
          <div className={styles.wrapper_title} key={path.path}>
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
            <a className={styles.link}>
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
