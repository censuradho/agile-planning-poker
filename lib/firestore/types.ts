export interface IIssue {
  value: string
  id: string
  description?: string
  link?: string
}

export interface Board {
  id: string
  name: string,
  issues?: Record<string, IIssue>
}

export interface CreateBoardRequest extends
  Pick<Board, 'name'> {
}

export type CreateIssueRequest = Pick<IIssue, 'value'>
