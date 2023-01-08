import {
  getAuth,
  signInAnonymously as rootSignInAnonymously,
  signOut as rootSignOut
} from 'firebase/auth'
import { firebase } from 'lib/firebase'

export const auth = getAuth(firebase)

export function signInAnonymously () {
  return rootSignInAnonymously(auth)
}

export function signOut () {
  return rootSignOut(auth)
}
