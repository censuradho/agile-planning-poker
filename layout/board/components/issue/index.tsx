import { useState } from 'react'

import {
  Box,
  Icon,
  Typography
} from 'components/common'

import { AddIssue } from './component'

import * as Styles from './styles'

export function Issue () {
  const [issues, setIssues] = useState([])

  return (
    <Styles.Root>
      <Styles.Trigger aria-label="issues">
        <Icon name="list" color="white" size={25} />
      </Styles.Trigger>
      <Styles.Portal>
        <Styles.Overlay />
        <Styles.Content>
          <Box fullWidth justifyContent="space-between" alignItems="center">
            <Typography as="strong" color="heading" size="md" fontWeight="400">Issue</Typography>
            <Styles.Cancel>
              <Icon name="close" />
            </Styles.Cancel>
          </Box>
          <AddIssue />
        </Styles.Content>
      </Styles.Portal>
    </Styles.Root>
  )
}
