import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react'
import { doc, onSnapshot } from 'firebase/firestore'

import {
  Board,
  CreateBoardRequest,
  Roles
} from 'lib/firestore/types'

import { BoardContextParams } from './types'
import { COLLECTION_BOARD, createBoard, firestore, updateBoard, updatePlayer } from 'lib/firestore'
import { useRouter } from 'next/router'
import { useAuth } from 'context/auth'
import { useInterval } from 'hooks'
import { logEvent } from 'lib/analytics'
import { ANALYTICS_EVENTS } from 'constants/analytics'

const BoardContext = createContext({} as BoardContextParams)
const baseCountDown = 3

export function BoardProvider ({ children }: any) {
  const router = useRouter()
  const auth = useAuth()

  const { id } = router.query

  const [board, setBoard] = useState<Board | null>(null)
  const [countDown, setCountDown] = useState<number>(3)

  const participants = useMemo(() =>
    board
      ?.players
      ?.filter(player => player.id !== auth.user?.uid) || []
  , [board?.players, auth.user])

  const player = board?.players?.find(player => player?.id === auth?.user?.uid)

  const players = board?.players || []

  const isAdmin = player?.role === Roles.admin

  const issues = board?.issues || []

  const canReveal = players.length > 1 && players
    .filter(player => !player.vote)
    .length === 0

  const handleCreateBoard = async (payload: CreateBoardRequest) => {
    const board = await createBoard({
      ...payload
    })
    setBoard(board)

    logEvent(ANALYTICS_EVENTS.CREATE_BOARD, {
      id: board.id
    })

    return board
  }

  const handleChangeActiveIssue = async (issueId: string) => {
    if (!board || !board.issues) return

    const issue = board.issues.find(value => value.id === issueId)

    const isActiveIssue = board.activeIssue?.id === issueId

    const activeIssue = isActiveIssue ? null : issue

    return await updateBoard(board.id, {
      activeIssue
    })
  }

  const handleRevealCards = async () => {
    if (!id) return
    setCountDown(baseCountDown)

    await updateBoard(id as string, {
      isPlaying: false
    })
  }

  const handleRestart = async () => {
    if (!board) return

    const players = board?.players || []

    await updateBoard(id as string, {
      isPlaying: true,
      isReveal: false
    })

    for (const player of players) {
      await updatePlayer(id as string, player.id, {
        vote: ''
      })
    }

    setCountDown(baseCountDown)
  }

  const revealCards = async () => {
    if (countDown === 1 && id && isAdmin) {
      await updateBoard(id as string, {
        isReveal: true
      })
    }

    setCountDown(prevState => prevState > 0 ? prevState - 1 : 0)
  }

  useInterval(revealCards, board && !board?.isPlaying ? 1000 : null)

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
        player,
        participants,
        countDown,
        canReveal,
        createBoard: handleCreateBoard,
        onReveal: handleRevealCards,
        onRestart: handleRestart,
        onChangeActiveIssue: handleChangeActiveIssue
      }}
    >
      {children}
    </BoardContext.Provider>
  )
}

export const useBoard = () => useContext(BoardContext)
