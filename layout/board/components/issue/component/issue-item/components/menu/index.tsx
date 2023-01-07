import * as Styles from './styles'
import { MenuProps } from './types'

export function Menu (props: MenuProps) {
  const {
    children,
    onDelete
  } = props

  return (
    <Styles.Root>
      <Styles.Trigger>
        {children}
      </Styles.Trigger>
      <Styles.Portal>
        <Styles.Content sideOffset={5} align="end">
          <Styles.Item onClick={onDelete} danger>Delete Issue</Styles.Item>
        </Styles.Content>
      </Styles.Portal>
    </Styles.Root>
  )
}
