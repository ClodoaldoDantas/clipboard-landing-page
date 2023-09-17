import Image from 'next/image'
import styles from './styles.module.scss'
import { Button } from '../Button'

export function Header() {
  return (
    <header className={styles.header}>
      <Image src="/images/logo.svg" alt="Clipboard" width={125} height={125} />

      <h1>A history of everything you copy</h1>

      <p>
        Clipboard allows you to track and organize everything you copy.
        Instantly access your clipboard on all your devices.
      </p>

      <div className={styles.headerActions}>
        <Button data-type="primary">Download for iOS</Button>
        <Button data-type="secondary">Download for Mac</Button>
      </div>
    </header>
  )
}
