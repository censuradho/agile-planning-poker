import { Button } from 'components/common'
import { Header } from './components'
import * as Styles from './styles'

export function HomeLayout () {
  return (
    <Styles.Container>
      <Header />
      <Styles.Main>
        <Styles.Section>
          <Styles.Box1>
            <h1>Fun, easy and reliable estimations</h1>
            <p>Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.</p>
            <Button>Start new game</Button>
          </Styles.Box1>
        </Styles.Section>
      </Styles.Main>
    </Styles.Container>
  )
}
