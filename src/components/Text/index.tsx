import { PropsWithChildren } from 'react'
import styles from './styles.module.scss'

export function Text(props: PropsWithChildren) {
  return <p className={styles.text}>{props.children}</p>
}
