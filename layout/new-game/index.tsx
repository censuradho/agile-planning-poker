import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import router from 'next/router'

import { Box, Button, Typography } from 'components/common'
import { Input } from 'components/common/input'

import * as Styles from './styles'
import { newGameSchemaValidation } from './validations'
import type { NewGameFormData } from './types'
import { paths } from 'constants/theme/routes'

export function NewGameLayout () {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<NewGameFormData>({
    resolver: yupResolver(newGameSchemaValidation)
  })

  const onSubmit = (payload: NewGameFormData) => {

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
              name="gameName"
              id="gameName"
              register={register('gameName')}
              errorMessage={errors?.gameName?.message}
            />
          </Box>
          <Box marginTop={2}>
            <Button fullWidth>Create game</Button>
          </Box>
        </Styles.Form>
      </Styles.Content>
    </Styles.Main>
  )
}
