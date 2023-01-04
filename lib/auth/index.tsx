import {
  getAuth,
  signInAnonymously as rootSignInAnonymously
} from 'firebase/auth'
import { firebase } from 'lib/firebase'

export const auth = getAuth(firebase)

export function signInAnonymously () {
  return rootSignInAnonymously(auth)
}
