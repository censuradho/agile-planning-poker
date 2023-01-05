export interface IIssue {
  value: string
  id: string
  description?: string
  link?: string
}

export interface Player {
  id: string
  name: string
  isAnonymous?: boolean
  vote?: string
  isSpectator?: boolean
}
export interface Board {
  id: string
  name: string,
  issues?: IIssue[]
  activeIssue?: IIssue | null
  players: Player[]
}

export interface CreateBoardRequest extends
  Pick<Board, 'name'> {
    players?: Player[]
}

export type CreateIssueRequest = Pick<IIssue, 'value'>

export type CreatePlayerRequest = Pick<Player, 'name' | 'isAnonymous' | 'id'>

export type UpdateBoardRequest = Partial<Board>
export type UpdatePlayerRequest = Partial<Player>

export type UpdateIssueRequest = Partial<IIssue>
