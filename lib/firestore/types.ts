
export interface Board {
  id: string
  name: string
}

export interface CreateBoardRequest extends
  Pick<Board, 'name'> {
}
