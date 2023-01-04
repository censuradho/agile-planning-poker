import { doc, getDoc, getFirestore, setDoc, updateDoc } from 'firebase/firestore'
import { firebase } from 'lib/firebase'

import { uuid } from 'uuidv4'

import {
  CreateBoardRequest,
  Board,
  CreateIssueRequest,
  IIssue,
  UpdateBoardRequest
} from './types'

export const COLLECTION_BOARD = 'board'

export const firestore = getFirestore(firebase)

export async function getBoard (id: string) {
  try {
    return (await getDoc(doc(firestore, COLLECTION_BOARD, id))).data() as Board
  } catch (err) {
    throw new Error(err as any)
  }
}

export async function createBoard (payload: CreateBoardRequest) {
  const id = uuid()

  const { name } = payload

  await setDoc(doc(firestore, COLLECTION_BOARD, id), {
    id,
    name
  })

  return await getBoard(id)
}

export async function createIssue (boardId: string, payload: CreateIssueRequest) {
  const id = uuid()
  const boardData = await getBoard(boardId)

  const { value } = payload

  const issue = await updateDoc(doc(firestore, COLLECTION_BOARD, boardId), {
    issues: [
      ...(boardData?.issues || []),
      {
        id,
        value
      }
    ]
  })

  return issue
}

export async function updateBoard (boardId: string, payload: UpdateBoardRequest) {
  await updateDoc(doc(firestore, COLLECTION_BOARD, boardId), payload)
}

export async function updateIssue (boardId: string, issueId: string, payload: Partial<IIssue>) {
  const data = await getBoard(boardId)

  if (!data) throw new Error('Board not found')

  const issues = data?.issues?.map(issue =>
    issue.id === issueId
      ? ({
        ...issue,
        ...payload
      })
      : issue
  )

  const board: UpdateBoardRequest = {
    issues
  }

  await updateBoard(boardId, board)
}
