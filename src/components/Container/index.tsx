import { PropsWithChildren } from 'react'
import styles from './styles.module.scss'

export function Container(props: PropsWithChildren) {
  return <div className={styles.container}>{props.children}</div>
}
