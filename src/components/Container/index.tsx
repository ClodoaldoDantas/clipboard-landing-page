'use client'

import { PropsWithChildren } from 'react'
import { motion, Variants } from 'framer-motion'
import styles from './styles.module.scss'

export const variants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export function Container(props: PropsWithChildren) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={variants}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={styles.container}
    >
      {props.children}
    </motion.div>
  )
}
