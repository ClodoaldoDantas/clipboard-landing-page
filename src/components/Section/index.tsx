'use client'

import { ReactNode } from 'react'

import classNames from 'classnames'
import styles from './styles.module.scss'

type SectionProps = {
  className?: string
  children: ReactNode
}

export function Section(props: SectionProps) {
  return (
    <section className={classNames(styles.section, props.className)}>
      {props.children}
    </section>
  )
}
