import { createContext, useContext, useState } from 'react'

import type {
  Board,
  CreateBoardRequest
} from 'lib/firestore/types'

import { BoardContextParams } from './types'
import { createBoard } from 'lib/firestore'

const BoardContext = createContext({} as BoardContextParams)

export function BoardProvider ({ children }: any) {
  const [board, setBoard] = useState<Board | null>(null)

  const handleCreateBoard = async (payload: CreateBoardRequest) => {
    const board = await createBoard(payload)
    setBoard(board)

    return board
  }

  return (
    <BoardContext.Provider
      value={{
        board,
        createBoard: handleCreateBoard
      }}
    >
      {children}
    </BoardContext.Provider>
  )
}

export const useBoard = () => useContext(BoardContext)
