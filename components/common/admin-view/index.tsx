import { useBoard } from 'context/board'
import { Roles } from 'lib/firestore/types'

export function AdminView ({ children }: any) {
  const { player } = useBoard()

  if (player?.role !== Roles.admin) return null

  return (
    <>{children}</>
  )
}
