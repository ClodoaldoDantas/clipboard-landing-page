import Image from 'next/image'
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram } from 'react-icons/io'
import { Container } from '../Container'
import styles from './styles.module.scss'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <Image src="/images/logo.svg" alt="Clipboard" width={55} height={55} />

        <nav className={styles.navigation}>
          <ul className={styles.menu}>
            <li>
              <a href="#">FAQs</a>
            </li>

            <li>
              <a href="#">Contact Us</a>
            </li>

            <li>
              <a href="#">Privacy Policy</a>
            </li>

            <li>
              <a href="#">Press Kit</a>
            </li>

            <li>
              <a href="#">Install Guide</a>
            </li>
          </ul>

          <ul className={styles.socialLinks}>
            <li>
              <a href="#" aria-label="Navigate to Facebook">
                <IoLogoFacebook size={24} />
              </a>
            </li>

            <li>
              <a href="#" aria-label="Navigate to Twitter">
                <IoLogoTwitter size={24} />
              </a>
            </li>

            <li>
              <a href="#" aria-label="Navigate to Instagram">
                <IoLogoInstagram size={24} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
