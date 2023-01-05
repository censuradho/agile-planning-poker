
import { useBoard } from 'context/board'
import { updatePlayer } from 'lib/firestore'
import { memo } from 'react'

import * as Styles from './styles'

const fibonacci = [
  {
    label: '0',
    value: '0'
  },
  {
    label: '1',
    value: '1'
  },
  {
    label: '3',
    value: '3'
  },
  {
    label: '5',
    value: '5'
  },
  {
    label: '8',
    value: '8'
  },
  {
    label: '13',
    value: '13'
  },
  {
    label: '21',
    value: '21'
  },
  {
    label: '34',
    value: '34'
  },
  {
    label: '55',
    value: '55'
  },
  {
    label: '89',
    value: '89'
  },
  {
    label: '?',
    value: '?'
  }
]

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
