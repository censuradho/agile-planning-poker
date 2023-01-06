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
  activeIssue?: IIssue
  participants?: Player[]
  countDown: number
  canReveal?: boolean
  createBoard: (payload: CreateBoardRequest) => Promise<Board>
  onRemovePlayer?: (userId: string) => Promise<void>
  onChangeActiveIssue?: (issueId: string) => Promise<void>
  onReveal: () => Promise<void>
  onRestart: () => Promise<void>
  onChangeIssueVote: (issueId: string, vote: string) => Promise<void>
}
