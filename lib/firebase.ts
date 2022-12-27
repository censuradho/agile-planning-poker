import { FirebaseOptions, getApp, initializeApp } from 'firebase/app'

import { firebaseConfig } from 'config/firebase'
import { getFirestore } from 'firebase/firestore'

const createFirebaseApp = (options: FirebaseOptions) => {
  try {
    return getApp()
  } catch (error) {
    return initializeApp(options)
  }
}

export const firebase = createFirebaseApp(firebaseConfig)

export const firestore = getFirestore(firebase)
