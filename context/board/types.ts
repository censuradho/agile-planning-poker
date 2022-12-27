import { Board, CreateBoardRequest } from 'lib/firestore/types'

export interface BoardContextParams {
  board?: Board | null
  createBoard: (payload: CreateBoardRequest) => Promise<Board>
  getBoard: (id: string) => Promise<void>
}
