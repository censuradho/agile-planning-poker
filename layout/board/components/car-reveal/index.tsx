import { ButtonIcon, Icon } from 'components/common'
import { useBoard } from 'context/board'
// import { useRoom } from '@/src/providers'
import { memo } from 'react'

import * as Styles from './styles'
import { CardRevalProps } from './types'

function BaseCardReval (props: CardRevalProps) {
  const {
    board,
    onRemovePlayer
  } = useBoard()

  const {
    label,
    disabled,
    isSpectator,
    playerId
  } = props

  return (
    <Styles.Card isReval={board?.isReveal}>
      <Styles.ButtonIconContainer>
        <ButtonIcon
          label="remove player"
          icon={{ name: 'close' }}
          onClick={() => onRemovePlayer?.(playerId)}
        />
      </Styles.ButtonIconContainer>
      <Styles.InnerCard>
        <Styles.Front disabled={disabled}></Styles.Front>
        <Styles.Back>
          {isSpectator
            ? (
              <Styles.Label>
                <Icon name="eye" color="primary" />
              </Styles.Label>
            )
            : (
              <Styles.Label>{label}</Styles.Label>
            )}
        </Styles.Back>
      </Styles.InnerCard>
    </Styles.Card>
  )
}

export const CardReval = memo(BaseCardReval)
