import { fibonacci } from 'constants/board'
import * as Styles from './styles'
import { SelectProps } from './types'

export function Select (props: SelectProps) {
  const renderOptions = fibonacci.map(item => (
    <Styles.Item
      value={item.value}
      key={item.value}
    >
      <Styles.ItemText>{item.label}</Styles.ItemText>

    </Styles.Item>
  ))

  return (
    <Styles.Root>
      <Styles.Trigger>
        <Styles.Value />
      </Styles.Trigger>
      <Styles.Portal>
        <Styles.Content>
          <Styles.Viewport>
            {renderOptions}
          </Styles.Viewport>
        </Styles.Content>
      </Styles.Portal>
    </Styles.Root>
  )
}
