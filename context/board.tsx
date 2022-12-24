import { createContext } from 'react'

const BoardContext = createContext({})

export function BoardProvider ({ children }: any) {
  return (
    <BoardContext.Provider
      value={{}}
    >
      {children}
    </BoardContext.Provider>
  )
}
