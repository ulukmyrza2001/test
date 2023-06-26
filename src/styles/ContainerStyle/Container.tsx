import styled from 'styled-components'
import styles from './Container.module.css'

interface ContainerProps {
  children: any
  sx?: any
}

export const Container = (props: ContainerProps) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.inner_wrapper} style={props.sx}>
        {props.children}
      </div>
    </section>
  )
}
