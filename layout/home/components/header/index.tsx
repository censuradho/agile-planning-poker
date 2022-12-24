import { Icon } from 'components/common'
import * as Styles from './styles'

export function Header () {
  return (
    <Styles.Header>
      <h1>asd</h1>
      <Styles.Navigation>
        <ul>
          <li>
            <Icon name="login" />
            <span>Login</span>
          </li>
        </ul>
      </Styles.Navigation>
    </Styles.Header>
  )
}
