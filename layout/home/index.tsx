import Image from 'next/image'

import cardsImg from 'public/cards.svg'

import { Box, Button, Container } from 'components/common'

import { Header } from './components'
import * as Styles from './styles'

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
                <p>Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.</p>
                <Button>Start new game</Button>
              </Box>
              <Image width={300} src={cardsImg} alt="cards" />
            </Styles.Box1>
          </Container>
        </Styles.Section>
      </Styles.Main>
    </Styles.Container>
  )
}
