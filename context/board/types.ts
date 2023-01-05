import type {
  Board,
  CreateBoardRequest,
  IIssue,
  Player
} from 'lib/firestore/types'

export interface BoardContextParams {
  board?: Board | null
  issues: IIssue[]
  player?: Player
  participants?: Player[]
  countDown: number
  canReveal?: boolean
  onChangeActiveIssue?: (issueId: string) => Promise<void>
  createBoard: (payload: CreateBoardRequest) => Promise<Board>
  onReveal: () => Promise<void>
  onRestart: () => Promise<void>
}
