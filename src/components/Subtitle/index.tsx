import { PropsWithChildren } from 'react'
import styles from './styles.module.scss'

export function Subtitle(props: PropsWithChildren) {
  return <h3 className={styles.subtitle}>{props.children}</h3>
}
