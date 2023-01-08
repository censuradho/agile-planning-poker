import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import router from 'next/router'

import { Box, Button, Typography } from 'components/common'
import { Input } from 'components/common/input'

import * as Styles from './styles'
import { newGameSchemaValidation } from './validations'
import type { NewGameFormData } from './types'
import { paths } from 'constants/theme/routes'
import { useBoard } from 'context/board'
import { resolvePath } from 'utils/helpers'
import { useState } from 'react'
import { useAuth } from 'context/auth'
import { createPlayer } from 'lib/firestore'
import { Roles } from 'lib/firestore/types'
import { logEvent } from 'lib/analytics'
import { ANALYTICS_EVENTS } from 'constants/analytics'

export function NewGameLayout () {
  const auth = useAuth()
  const { createBoard } = useBoard()
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<NewGameFormData>({
    resolver: yupResolver(newGameSchemaValidation)
  })

  const onSubmit = async (payload: NewGameFormData) => {
    setIsLoading(true)

    const board = await createBoard({
      ...payload
    })

    if (auth?.isSigned && auth.user) {
      await createPlayer(board.id, {
        id: auth.user.uid,
        name: auth.user.displayName || '',
        isAnonymous: auth.user?.isAnonymous,
        role: Roles.admin
      })

      logEvent(ANALYTICS_EVENTS.PLAYER_JOIN, {
        id: auth.user.uid
      })
    }

    router.push(resolvePath(paths.board, { id: board.id }))
  }

  return (
    <Styles.Main>
      <Styles.Content>
        <Box marginBottom={20}>
          <Button
            onClick={() => router.push(paths.home)}
            type="button"
            variant="letter"
            icon={{
              name: 'arrowBackward'
            }}
          >
          New game
          </Button>
        </Box>
        <Styles.Form onSubmit={handleSubmit(onSubmit)}>
          <Typography
            color="heading"
            size="sm"
          >Choose a name and a voting system for your game.</Typography>
          <Box flexDirection="column" gap={0.5} marginTop={2}>
            <Input
              label="Game's name"
              name="name"
              id="name"
              register={register('name')}
              errorMessage={errors?.name?.message}
              maxLength={50}
            />
          </Box>
          <Box marginTop={2}>
            <Button disabled={isLoading} fullWidth>Create game</Button>
          </Box>
        </Styles.Form>
      </Styles.Content>
    </Styles.Main>
  )
}
