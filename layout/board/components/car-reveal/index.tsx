import { Icon } from 'components/common'
// import { useRoom } from '@/src/providers'
import { memo } from 'react'

import * as Styles from './styles'
import { CardRevalProps } from './types'

function BaseCardReval (props: CardRevalProps) {
  // const context = useRoom()

  const { label, disabled, isSpectator } = props

  return (
    <Styles.Card isReval={false}>
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
