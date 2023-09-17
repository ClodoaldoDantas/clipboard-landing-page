import Image from 'next/image'
import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { Title } from '@/components/Title'
import { Text } from '@/components/Text'
import { Subtitle } from '@/components/Subtitle'
import { Small } from '@/components/Small'
import { Button } from '@/components/Button'
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

          <div className={styles.keepTrackRow}>
            <Image
              className={styles.picture}
              src="/images/image-computer.png"
              alt="iMac with beach background"
              height={572}
              width={752}
            />

            <ul className={styles.keepTrackList}>
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

      <Section className={styles.workflow}>
        <Container>
          <Title>Supercharge your workflow</Title>
          <Text>We’ve got the tools to boost your productivity.</Text>

          <ul className={styles.workflowList}>
            <li>
              <Image
                src="/images/icon-blacklist.svg"
                alt=""
                height={40}
                width={44}
              />

              <Subtitle>Create blacklists</Subtitle>

              <Small>
                Ensure sensitive information never makes its way to your
                clipboard by excluding certain sources.
              </Small>
            </li>

            <li>
              <Image
                src="/images/icon-text.svg"
                alt=""
                height={32}
                width={36}
              />

              <Subtitle>Plain text snippets</Subtitle>

              <Small>
                Remove unwanted formatting from copied text for a consistent
                look.
              </Small>
            </li>

            <li>
              <Image
                src="/images/icon-preview.svg"
                alt=""
                height={32}
                width={50}
              />

              <Subtitle>Sneak preview</Subtitle>

              <Small>
                Quick preview of all snippets on your Clipboard for easy access.
              </Small>
            </li>
          </ul>
        </Container>
      </Section>

      <Section className={styles.partners}>
        <Container>
          <Image
            src="/images/logo-google.png"
            alt="Google"
            width={165}
            height={49}
          />

          <Image src="/images/logo-ibm.png" alt="IBM" width={139} height={51} />

          <Image
            src="/images/logo-microsoft.png"
            alt="Microsoft"
            width={161}
            height={35}
          />

          <Image
            src="/images/logo-hp.png"
            alt="Hewlett Packard Enterprise"
            width={135}
            height={56}
          />

          <Image
            src="/images/logo-vector-graphics.png"
            alt="Vector Graphics"
            width={125}
            height={30}
          />
        </Container>
      </Section>

      <Section className={styles.download}>
        <Container>
          <Title>Clipboard for iOS and Mac OS</Title>

          <Text>
            Available for free on the App Store. Download for Mac or iOS, sync
            with iCloud and you’re ready to start adding to your clipboard.
          </Text>

          <div className={styles.downloadActions}>
            <Button data-type="primary">Download for iOS</Button>
            <Button data-type="secondary">Download for Mac</Button>
          </div>
        </Container>
      </Section>
    </main>
  )
}
