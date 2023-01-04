import { createContext, useContext, useState } from 'react'

import type {
  Board,
  CreateBoardRequest,
  IIssue
} from 'lib/firestore/types'

import { BoardContextParams } from './types'
import { createBoard, getBoard } from 'lib/firestore'

const BoardContext = createContext({} as BoardContextParams)

export function BoardProvider ({ children }: any) {
  const [board, setBoard] = useState<Board | null>(null)
  const [issues, setIssues] = useState<IIssue[]>([])
  const [issueActive, setIssueActive] = useState<IIssue>()

  const handleCreateBoard = async (payload: CreateBoardRequest) => {
    const board = await createBoard(payload)
    setBoard(board)

    return board
  }

  const handleGetBoard = async (id: string) => {
    const board = await getBoard(id)
    setBoard(board)
  }

  return (
    <BoardContext.Provider
      value={{
        board,
        issues,
        setIssues,
        issueActive,
        setIssueActive,
        createBoard: handleCreateBoard,
        getBoard: handleGetBoard
      }}
    >
      {children}
    </BoardContext.Provider>
  )
}

export const useBoard = () => useContext(BoardContext)
