import { ComponentProps } from 'react'
import styles from './styles.module.scss'

type ButtonProps = ComponentProps<'button'>

export function Button(props: ButtonProps) {
  return <button className={styles.button} {...props} />
}
