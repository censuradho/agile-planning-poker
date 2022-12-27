import { Box, Typography } from 'components/common'
import { useBoard } from 'context/board'
import { Issue } from './components'
import * as Styles from './styles'

import router from 'next/router'
import { useEffect } from 'react'

export function BoardLayout () {
  const { board, getBoard } = useBoard()

  useEffect(() => {
    getBoard(router.query.id as string)
  }, [])

  return (
    <Styles.Container>
      <Styles.Header>
        <Box gap={1} alignItems="center">
          <Typography>Logo</Typography>
          {board?.name && <Typography>{' '}{board?.name}</Typography>}
        </Box>
        <Box justifyContent="flex-end" flex={1}>
          <Issue />
        </Box>
      </Styles.Header>
    </Styles.Container>
  )
}
