import { getAuth } from 'firebase/auth'
import { firebase } from 'lib/firebase'

export const auth = getAuth(firebase)
