import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button, Typography } from 'components/common'
import { Input } from 'components/common/input'
import * as Styles from './styles'

import type { PlayerRegisterFormData, PlayerRegisterProps } from './types'
import { playerRegisterValidations } from './validations'
import { useState } from 'react'
import { createPlayer } from 'lib/firestore'
import { useRouter } from 'next/router'
import { useAuth } from 'context/auth'
import { useBoard } from 'context/board'
import { Roles } from 'lib/firestore/types'

export function PlayerRegister (props: PlayerRegisterProps) {
  const [isLoading, setIsLoading] = useState(false)
  const { board } = useBoard()

  const router = useRouter()
  const auth = useAuth()

  const { id } = router.query

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<PlayerRegisterFormData>({
    resolver: yupResolver(playerRegisterValidations)
  })

  const onSubmit = async (data: PlayerRegisterFormData) => {
    try {
      setIsLoading(true)
      const players = board?.players || []

      const isUniquePlayer = players.length === 0

      const anonymousUser = await auth.signInAnonymously()

      await createPlayer(id as string, {
        id: anonymousUser.user.uid,
        name: data.name,
        isAnonymous: true,
        role: isUniquePlayer ? Roles.admin : Roles.player
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Styles.Root {...props}>
      <Styles.Portal>
        <Styles.Overlay />
        <Styles.Content>
          <Typography size="md">Choose your display name</Typography>
          <Styles.Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              id="name"
              register={register('name')}
              errorMessage={errors?.name?.message}
              label="your display name"
            />
            <Box marginTop={2}>
              <Button
                fullWidth
                loading={isLoading}
              >Continue to game</Button>
            </Box>
          </Styles.Form>
        </Styles.Content>
      </Styles.Portal>
    </Styles.Root>
  )
}
