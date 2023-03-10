import dynamic from 'next/dynamic'

import { Box, Button, Typography } from 'components/common'
import { useBoard } from 'context/board'
import { Avatar, Issue } from './components'
import * as Styles from './styles'
import { useAuth } from 'context/auth'
import { CardList } from './components/card-list'
import { CardReval } from './components/car-reveal'
import Link from 'next/link'
import { paths } from 'constants/routes'
import Image from 'next/image'

import Logo from 'public/logo-full.svg'
import { useRouter } from 'next/router'
import { resolvePath } from 'utils/helpers'

const PlayerRegister = dynamic(() => import('./components').then(mod => mod.PlayerRegister), {
  ssr: false
})

export function BoardLayout () {
  const auth = useAuth()
  const router = useRouter()

  const {
    board,
    player,
    onReveal,
    countDown,
    onRestart,
    canReveal,
    activeIssue
  } = useBoard()

  const renderCurrentIssue = () => {
    if (!board?.activeIssue) return null

    return (
      <Box>
        <Styles.IssueLabel>{`Votting ${activeIssue?.value}`}</Styles.IssueLabel>
      </Box>
    )
  }

  const renderParticipants = board?.players?.map(participant => {
    const isMe = player?.id === participant.id

    const name = isMe ? 'you' : participant.name

    return (
      <Box
        key={participant.id}
        flexDirection="column"
        gap={1}
      >
        <CardReval
          playerId={participant.id}
          isSpectator={participant?.isSpectator}
          label={participant.vote || ''}
        />
        <Styles.PlayerName me={isMe}>{name}</Styles.PlayerName>
      </Box>
    )
  })

  const renderReveal = () => {
    if (board?.isReveal) return null

    return (
      <Button onClick={onReveal} disabled={!canReveal || !board?.isPlaying}>
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
        disabled={!canReveal}
      >Start new game</Button>
    )
  }

  const renderCountDown = () => {
    if (board?.isPlaying || countDown === 0) return null

    return (
      <Styles.Count>{countDown}</Styles.Count>
    )
  }

  const renderPlayerAvatar = () => {
    if (!player) return null

    return (
      <Box gap={1} alignItems="center">
        <Avatar
          src=""
          alt={player?.name}
        />
        <Typography>{`# ${player.name}`}</Typography>
      </Box>
    )
  }

  const handleShare = async () => {
    const fullUrl = `${window.location.origin}${resolvePath(paths.board, { id: router.query.id })}`

    await navigator.clipboard.writeText(fullUrl)
  }

  return (
    <>
      <PlayerRegister open={(player && !player?.name) || !auth.isSigned} />
      <Styles.Container>
        <Styles.Header>
          <Box gap={1} alignItems="center">
            <Link href={paths.home}>
              <Image height={35} src={Logo} alt="logo" />
            </Link>
            {board?.name && <Styles.BoardName>{board?.name}</Styles.BoardName>}
          </Box>
          <Box justifyContent="flex-end" flex={1}>
            <Issue />
          </Box>
        </Styles.Header>
        <Styles.Main>
          <Box flexDirection="column" gap={2}>
            <Box justifyContent="space-between">
              {renderPlayerAvatar()}
              <Button variant="stroke" onClick={handleShare}>Share</Button>
            </Box>
            {renderCurrentIssue()}
          </Box>
          <Box
            marginTop={3}
            alignItems="center"
            justifyContent="center"
            gap={2}
            flexDirection="column"
          >
            <Box fullWidth justifyContent="center" gap={1}>
              {renderParticipants}
            </Box>
            <Box justifyContent="center">
              {renderReveal()}
              {renderRestart()}
            </Box>
            <Box>
              {renderCountDown()}
            </Box>
          </Box>
          <Styles.Hand>
            <Box justifyContent="center">
              <Typography>Choose your card ????</Typography>
            </Box>
            <CardList />
          </Styles.Hand>
        </Styles.Main>
      </Styles.Container>
    </>
  )
}
