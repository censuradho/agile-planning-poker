import { Box, Icon } from 'components/common'
import * as Styles from './styles'

export function Header () {
  return (
    <Styles.Root>
      <Styles.Header>
        <strong>Logo</strong>
        <Styles.Trigger>
          <Icon name="menuAltRight" />
        </Styles.Trigger>
        <Styles.Portal>
          <Styles.Overlay />
          <Styles.Content>
            <Box justifyContent="flex-end" fullWidth>
              <Styles.Cancel>
                <Icon name="close" />
              </Styles.Cancel>
            </Box>
            <Styles.List>
              <Styles.Item>
                <Icon name="login" />
                <span>Login</span>
              </Styles.Item>
              <Styles.Item>
                <Icon name="userPin" />
                <span>Sign up</span>
              </Styles.Item>
            </Styles.List>
          </Styles.Content>
        </Styles.Portal>
      </Styles.Header>
    </Styles.Root>

  )
}
