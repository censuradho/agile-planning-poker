import { SelectProps } from './components/select/types'
export interface IssueItemProps extends
  Pick<SelectProps, 'onValueChange' | 'value'> {
  label: string
  active?: boolean,
  onActiveChange?: () => void
  index?: string
}
