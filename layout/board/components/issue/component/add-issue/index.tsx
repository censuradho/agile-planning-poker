import { Button } from 'components/common'
import { Input } from 'components/common/input'
import { useState } from 'react'
import * as Styles from './styles'

export function AddIssue () {
  const [isEdditing, setIsEditting] = useState(false)

  const renderForm = () => {
    if (isEdditing) return null

    return (
      <Styles.Form>

      </Styles.Form>
    )
  }

  return (
    <Styles.Container>
      <Button fullWidth>Add an issue</Button>
    </Styles.Container>
  )
}
