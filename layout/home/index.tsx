import Image from 'next/image'

import cardsImg from 'public/video-call.svg'

import { Box, Button, Container } from 'components/common'

import { Header } from './components'
import * as Styles from './styles'
import { paths } from 'constants/theme/routes'

export function HomeLayout () {
  return (
    <Styles.Container>
      <Header />
      <Styles.Main>
        <Styles.Section>
          <Container>

            <Styles.Box1>
              <Box
                fullWidth
                flexDirection={{
                  '@initial': 'column'
                }}
                justifyContent={{
                  '@initial': 'center'
                }}
                alignItems={{
                  '@initial': 'center',
                  '@laptops-min': 'flexStart'
                }}
                gap={2}
              >
                <h1>Fun, easy and reliable estimations</h1>
                <p>Estimate time and effort in real time with your team and ensure the most accurate history points for your project.</p>
                <Button as="a" href={paths.newGame}>Start new game</Button>
              </Box>
              <Image priority width={400} src={cardsImg} alt="cards" />
            </Styles.Box1>
          </Container>
        </Styles.Section>
      </Styles.Main>
    </Styles.Container>
  )
}
