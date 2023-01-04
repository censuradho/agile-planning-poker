import type {
  Board,
  CreateBoardRequest,
  IIssue
} from 'lib/firestore/types'

export interface BoardContextParams {
  board?: Board | null
  issues: IIssue[]
  onChangeActiveIssue?: (issueId: string) => Promise<void>
  createBoard: (payload: CreateBoardRequest) => Promise<Board>
}
