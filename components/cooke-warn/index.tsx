import { Box, Button, Typography } from 'components/common'
import Link from 'next/link'
import * as Styles from './styles'

export function CookieWarn () {
  return (
    <Styles.Container>
      <Styles.Content>
        <Box alignItems="center" justifyContent="space-between" gap={4}>
          <Box flexDirection="column" gap={0.5}>
            <Typography>
          We use cookies on this website to improve your user experience.
          For a complete overview of all cookies used, please see your personal settings.
            </Typography>
            <Typography>For more information, consult the <Link href="">privacy policies</Link></Typography>
          </Box>
          <Button>I agree</Button>
        </Box>
      </Styles.Content>
    </Styles.Container>
  )
}
