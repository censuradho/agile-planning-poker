import dynamic from 'next/dynamic'

import { Box, Typography } from 'components/common'
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
    participants
  } = useBoard()

  const renderCurrentIssue = () => {
    if (!board?.activeIssue) return null

    return (
      <Box>
        <Styles.IssueLabel>{`Votting ${board?.activeIssue?.value}`}</Styles.IssueLabel>
      </Box>
    )
  }

  const renderParticipants = participants?.map(participant => (
    <CardReval
      key={participant.id}
      isSpectator={participant?.isSpectator}
      label={participant.vote || ''}
    />
  ))

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
          <Styles.Hand>
            <CardList />
          </Styles.Hand>
        </Styles.Main>
      </Styles.Container>
    </>
  )
}
