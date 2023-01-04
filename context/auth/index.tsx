import { onAuthStateChanged, User } from 'firebase/auth'
import { auth } from 'lib/auth'
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
  return (
    <AuthContext.Provider
      value={{
        user
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
