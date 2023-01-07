import { Box, Button, Icon } from 'components/common'
import * as Styles from './styles'
import dynamic from 'next/dynamic'

import Logo from 'public/logo-full.svg'

import router from 'next/router'
import { paths } from 'constants/theme/routes'
import Image from 'next/image'

const HiddenView = dynamic(() => import('components/common/hidden-view').then(mod => mod.HiddenView), {
  ssr: false
})

export function Header () {
  return (
    <Styles.Root>
      <Styles.Header>
        <Image height={40} src={Logo} alt="logo" />
        <Styles.NavContainer>
          <Styles.Navigation>
            <ul>
              <li>Login</li>
              <li>Sign up</li>
            </ul>
          </Styles.Navigation>
          <Button variant="stroke" onClick={() => router.push(paths.newGame)}>Start new game</Button>
        </Styles.NavContainer>
        <HiddenView breakpoint="laptops-min">
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
        </HiddenView>
      </Styles.Header>
    </Styles.Root>

  )
}
