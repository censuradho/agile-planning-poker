import { onAuthStateChanged, User } from 'firebase/auth'

import { auth, signInAnonymously } from 'lib/auth'
import { createContext, useContext, useEffect, useState } from 'react'
import { AuthContextParams } from './types'

const AuthContext = createContext({} as AuthContextParams)

export function AuthProvider ({ children }: any) {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      setUser(user || null)
    })
  }, [])

  const handleSignInAnonymously = async () => {
    return await signInAnonymously()
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isSigned: !!user,
        signInAnonymously: handleSignInAnonymously
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
