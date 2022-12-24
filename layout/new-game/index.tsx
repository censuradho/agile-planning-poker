import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { Box, Button } from 'components/common'
import { Input } from 'components/common/input'

import * as Styles from './styles'
import { newGameSchemaValidation } from './validations'
import type { NewGameFormData } from './types'

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
      <Styles.Form onSubmit={handleSubmit(onSubmit)}>
        <strong>Choose a name and a voting system for your game.</strong>
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
    </Styles.Main>
  )
}
