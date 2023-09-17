import { PropsWithChildren } from 'react'
import styles from './styles.module.scss'

export function Small(props: PropsWithChildren) {
  return <p className={styles.smallText}>{props.children}</p>
}
