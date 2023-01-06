export enum Roles {
  admin = 'admin',
  player = 'player'
}

export interface IIssue {
  value: string
  id: string
  description?: string
  link?: string
  vote?: string
}

export interface Player {
  id: string
  name: string
  isAnonymous?: boolean
  vote?: string
  isSpectator?: boolean
  role?: keyof typeof Roles
}
export interface Board {
  id: string
  name: string,
  issues?: IIssue[]
  activeIssue?: string | null
  players: Player[]
  isPlaying?: boolean
  isReveal?: boolean
}

export interface CreateBoardRequest extends
  Pick<Board, 'name' > {
    players?: Player[]
}

export type CreateIssueRequest = Pick<IIssue, 'value'>

export type CreatePlayerRequest = Pick<Player, 'name' | 'isAnonymous' | 'id' | 'role'>

export type UpdateBoardRequest = Partial<Board>
export type UpdatePlayerRequest = Partial<Player>

export type UpdateIssueRequest = Partial<IIssue>
