import { User } from 'firebase/auth'

export interface AuthContextParams {
  user: User | null
  isSigned?: boolean
  isLoading?: boolean
  signInAnonymously: () => Promise<void>
}
