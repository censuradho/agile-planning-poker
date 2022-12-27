import { doc, getDoc, setDoc } from 'firebase/firestore'
import { firestore } from 'lib/firebase'

import { uuid } from 'uuidv4'

import { CreateBoardRequest, Board } from './types'

const COLLECTION_BOARD = 'board'

export async function getBoard (id: string) {
  return (await getDoc(doc(firestore, COLLECTION_BOARD, id))).data() as Board
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
