import dynamic from 'next/dynamic'

import { Box, Button, Typography } from 'components/common'
import { useBoard } from 'context/board'
import { Issue } from './components'
import * as Styles from './styles'
import { useAuth } from 'context/auth'
import { CardList } from './components/card-list'
import { CardReval } from './components/car-reveal'

const PlayerRegister = dynamic(() => import('context/board/components').then(mod => mod.PlayerRegister), {
  ssr: false
})

export function BoardLayout () {
  const auth = useAuth()

  const {
    board,
    player,
    onReveal,
    countDown,
    onRestart
  } = useBoard()

  const renderCurrentIssue = () => {
    if (!board?.activeIssue) return null

    return (
      <Box>
        <Styles.IssueLabel>{`Votting ${board?.activeIssue?.value}`}</Styles.IssueLabel>
      </Box>
    )
  }

  const renderParticipants = board?.players?.map(participant => (
    <CardReval
      key={participant.id}
      isSpectator={participant?.isSpectator}
      label={participant.vote || ''}
    />
  ))

  const renderReveal = () => {
    if (board?.isReveal) return null

    return (
      <Button onClick={onReveal}>
        show cards
      </Button>
    )
  }

  const renderRestart = () => {
    if (!board?.isReveal) return null

    return (
      <Button
        variant="stroke"
        onClick={onRestart}
      >Start new game</Button>
    )
  }

  return (
    <>
      <PlayerRegister open={auth.isSigned && player && !player?.name} />
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
          <Box fullWidth justifyContent="center">
            {renderParticipants}
          </Box>
          <Box justifyContent="center">
            {renderReveal()}
            {renderRestart()}
          </Box>
          <Styles.Hand>
            <Box justifyContent="center">
              <Typography>Choose your card 👇</Typography>
            </Box>
            <CardList />
          </Styles.Hand>
        </Styles.Main>
      </Styles.Container>
    </>
  )
}
