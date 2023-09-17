import { PropsWithChildren } from 'react'
import styles from './styles.module.scss'

export function Title(props: PropsWithChildren) {
  return <h2 className={styles.title}>{props.children}</h2>
}
