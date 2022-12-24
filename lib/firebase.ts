import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

import { firebaseConfig } from 'config/firebase'

const app = initializeApp(firebaseConfig)

export const firestore = getFirestore(app)
export const auth = getAuth(app)
