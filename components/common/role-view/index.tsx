import { useBoard } from 'context/board'

import { RoleViewProps } from './types'

export function RoleView (props: RoleViewProps) {
  const { children, roles } = props

  const { player } = useBoard()

  if (!player?.role || !roles.includes(player?.role)) return null

  return (
    <>{children}</>
  )
}
