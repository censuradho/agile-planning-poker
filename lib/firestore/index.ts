import { firestore } from '../firebase'

import { uuid } from 'uuidv4'

import { CreateBoardRequest, Board } from './types'

import { doc, getDoc, setDoc } from 'firebase/firestore'

const COLLECTION_BOARD = 'board'

export async function createBoard (payload: CreateBoardRequest) {
  const id = uuid()

  const { name } = payload

  await setDoc(doc(firestore, COLLECTION_BOARD, id), {
    id,
    name
  })

  return (await getDoc(doc(firestore, COLLECTION_BOARD, id))).data() as Board
}
