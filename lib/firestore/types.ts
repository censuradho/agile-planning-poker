export interface IIssue {
  value: string
  id: string
  description?: string
  link?: string
}

interface Player {
  id: string
  name: string
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
}

export type CreateIssueRequest = Pick<IIssue, 'value'>

export type UpdateBoardRequest = Partial<Board>

export type UpdateIssueRequest = Partial<IIssue>
