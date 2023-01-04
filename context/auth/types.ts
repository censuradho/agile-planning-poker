import { User } from 'firebase/auth'

export interface AuthContextParams {
  user: User | null
}
