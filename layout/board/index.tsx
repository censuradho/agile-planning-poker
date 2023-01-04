import { Box, Typography } from 'components/common'
import { useBoard } from 'context/board'
import { Issue } from './components'
import * as Styles from './styles'

export function BoardLayout () {
  const {
    board
  } = useBoard()

  const renderCurrentIssue = () => {
    if (!board?.activeIssue) return null

    return (
      <Box>
        <Styles.IssueLabel>{`Votting ${board?.activeIssue?.value}`}</Styles.IssueLabel>
      </Box>
    )
  }

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
      <Styles.Main>
        {renderCurrentIssue()}
      </Styles.Main>
    </Styles.Container>
  )
}
