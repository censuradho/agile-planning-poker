import { Board, CreateBoardRequest, IIssue } from 'lib/firestore/types'
import { Dispatch, SetStateAction } from 'react'

export interface BoardContextParams {
  board?: Board | null
  issues: IIssue[]
  issueActive?: IIssue,
  setIssues: Dispatch<SetStateAction<IIssue[]>>
  setIssueActive: Dispatch<SetStateAction<IIssue | undefined>>
  createBoard: (payload: CreateBoardRequest) => Promise<Board>
  getBoard: (id: string) => Promise<void>
}
