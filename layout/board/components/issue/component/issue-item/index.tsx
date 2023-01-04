import { Box, ButtonIcon } from 'components/common'
import * as Styles from './styles'
import { IssueItemProps } from './types'

export function IssueItem (props: IssueItemProps) {
  const {
    label,
    active,
    onActiveChange
  } = props

  return (
    <Styles.Container active={active}>
      <Box flexDirection="column" gap={1.2}>
        <Box justifyContent="flex-end">
          <ButtonIcon
            label="menu"
            icon={{ name: 'threeDotsVertical' }}
          />
        </Box>
        <Styles.Label>{label}</Styles.Label>
        <Box>
          <Styles.Button
            onClick={onActiveChange}
            variant={active ? 'primary' : 'letter'}
          >{
              active ? 'Voting now...' : 'Vote this issue'
            }</Styles.Button>
        </Box>
      </Box>
    </Styles.Container>
  )
}
