import Image from 'next/image'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main>
      <section data-type="keep-track" className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.title}>Keep track of your snippets</h2>

          <p className={styles.text}>
            Clipboard instantly stores any item you copy in the cloud, meaning
            you can access your snippets immediately on all your devices. Our
            Mac and iOS apps will help you organize everything.
          </p>

          <div className={styles.row}>
            <Image
              className={styles.picture}
              src="/images/image-computer.png"
              alt="iMac with beach background"
              height={572}
              width={752}
            />

            <ul className={styles.verticalList}>
              <li>
                <h3 className={styles.subtitle}>Quick Search</h3>
                <p className={styles.smallText}>
                  Easily search your snippets by content, category, web address,
                  application, and more.
                </p>
              </li>

              <li>
                <h3 className={styles.subtitle}>iCloud Sync</h3>
                <p className={styles.smallText}>
                  Instantly saves and syncs snippets across all your devices.
                </p>
              </li>

              <li>
                <h3 className={styles.subtitle}>Complete History</h3>
                <p className={styles.smallText}>
                  Retrieve any snippets from the first moment you started using
                  the app.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section data-type="access-clipboard" className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.title}>Access Clipboard Anywhere</h2>

          <p className={styles.text}>
            Whether you’re on the go, or at your computer, you can access all
            your Clipboard snippets in a few simple clicks.
          </p>

          <Image
            className={styles.picture}
            src="/images/image-devices.png"
            alt="Multiple Devices"
            height={575}
            width={905}
          />
        </div>
      </section>
    </main>
  )
}
