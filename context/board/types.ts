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
  onChangeActiveIssue?: (issueId: string) => Promise<void>
  createBoard: (payload: CreateBoardRequest) => Promise<Board>
  onReveal: () => Promise<void>
  onRestart: () => Promise<void>
}
