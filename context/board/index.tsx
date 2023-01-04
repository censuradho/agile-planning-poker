import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react'
import { doc, onSnapshot } from 'firebase/firestore'

import type {
  Board,
  CreateBoardRequest
} from 'lib/firestore/types'

import { BoardContextParams } from './types'
import { COLLECTION_BOARD, createBoard, firestore, updateBoard } from 'lib/firestore'
import { useRouter } from 'next/router'

const BoardContext = createContext({} as BoardContextParams)

export function BoardProvider ({ children }: any) {
  const router = useRouter()

  const { id } = router.query

  const [board, setBoard] = useState<Board | null>(null)

  const handleCreateBoard = async (payload: CreateBoardRequest) => {
    const board = await createBoard(payload)
    setBoard(board)

    return board
  }

  const issues = board?.issues || []

  const handleChangeActiveIssue = async (issueId: string) => {
    if (!board || !board.issues) return

    const issue = board.issues.find(value => value.id === issueId)

    const isActiveIssue = board.activeIssue?.id === issueId

    const activeIssue = isActiveIssue ? null : issue

    return await updateBoard(board.id, {
      activeIssue
    })
  }

  useEffect(() => {
    if (!id) return

    const unsubscribe = onSnapshot(doc(firestore, COLLECTION_BOARD, id as string), (doc) => {
      setBoard(doc.data() as Board)
    })
    return () => unsubscribe()
  }, [id])

  return (
    <BoardContext.Provider
      value={{
        board,
        issues,
        createBoard: handleCreateBoard,
        onChangeActiveIssue: handleChangeActiveIssue
      }}
    >
      {children}
    </BoardContext.Provider>
  )
}

export const useBoard = () => useContext(BoardContext)
