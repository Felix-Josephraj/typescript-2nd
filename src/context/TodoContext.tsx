import React, {
  FunctionComponent,
  useContext,
  useReducer,
  useState,
} from 'react'
// import reducer from '../reducer/toDoReducer'

type todoContextType = {
  list: number[]
  updateList: (id: number) => void
}

interface Props {
  children?: React.ReactNode
}

const todoContext = React.createContext<todoContextType | null>(null)
// const list = [1, 2]
const TodoContextProvider: React.FC<Props> = ({ children }) => {
  const [list, setList] = useState<number[]>([])

  const initialState: number[] = []

  const updateList = (id: number) => {
    // list.push(id)
    // console.log(id)
    setList((prevValue) => {
      return [...prevValue, id]
    })
  }

  return (
    <todoContext.Provider value={{ list, updateList }}>
      {children}
    </todoContext.Provider>
  )
}

export default TodoContextProvider

export const UseTodoContext = () => {
  return useContext(todoContext) as todoContextType
}
