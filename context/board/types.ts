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
  onChangeActiveIssue?: (issueId: string) => Promise<void>
  createBoard: (payload: CreateBoardRequest) => Promise<Board>
}
