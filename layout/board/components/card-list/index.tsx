
import { fibonacci } from 'constants/board'
import { useBoard } from 'context/board'
import { updatePlayer } from 'lib/firestore'
import { memo } from 'react'

import * as Styles from './styles'

function BaseCardList () {
  const {
    board,
    player
  } = useBoard()

  const handleVote = async (card: typeof fibonacci[0]) => {
    if (!board || !player) return

    await updatePlayer(board.id, player.id, {
      vote: card.value
    })
  }

  const renderCards = fibonacci?.map((card, index) => (
    <Styles.Card isSelected={card.value === player?.vote} key={index}>
      <Styles.Button
        disabled={player?.isSpectator}
        onClick={() => handleVote(card)}
      >{card.label}</Styles.Button>
    </Styles.Card>
  ))

  return (
    <Styles.List>{renderCards}</Styles.List>
  )
}

export const CardList = memo(BaseCardList)
