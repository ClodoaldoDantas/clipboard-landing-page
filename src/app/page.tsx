import Image from 'next/image'
import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { Title } from '@/components/Title'
import { Text } from '@/components/Text'
import { Subtitle } from '@/components/Subtitle'
import { Small } from '@/components/Small'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main>
      <Section className={styles.keepTrack}>
        <Container>
          <Title>Keep track of your snippets</Title>

          <Text>
            Clipboard instantly stores any item you copy in the cloud, meaning
            you can access your snippets immediately on all your devices. Our
            Mac and iOS apps will help you organize everything.
          </Text>

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
                <Subtitle>Quick Search</Subtitle>
                <Small>
                  Easily search your snippets by content, category, web address,
                  application, and more.
                </Small>
              </li>

              <li>
                <Subtitle>iCloud Sync</Subtitle>
                <Small>
                  Instantly saves and syncs snippets across all your devices.
                </Small>
              </li>

              <li>
                <Subtitle>Complete History</Subtitle>
                <Small>
                  Retrieve any snippets from the first moment you started using
                  the app.
                </Small>
              </li>
            </ul>
          </div>
        </Container>
      </Section>

      <Section className={styles.accessClipboard}>
        <Container>
          <Title>Access Clipboard Anywhere</Title>

          <Text>
            Whether you’re on the go, or at your computer, you can access all
            your Clipboard snippets in a few simple clicks.
          </Text>

          <Image
            className={styles.picture}
            src="/images/image-devices.png"
            alt="Multiple Devices"
            height={575}
            width={905}
          />
        </Container>
      </Section>
    </main>
  )
}
