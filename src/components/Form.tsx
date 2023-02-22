import React, { Dispatch, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { UseTodoContext } from '../context/TodoContext'
import { useAppSelector, useAppDispatch } from '../hooks'
import { updateListRedux } from '../features/toDoSlice'

const Form = () => {
  const { updateList } = UseTodoContext()
  const todoIDref = useRef<HTMLInputElement>(null)
  const dispatch: Dispatch<any> = useDispatch()
  const toDoList = useAppSelector((state) => state.toDoReducer)
  console.log(toDoList)
  return (
    <div>
      <form
        action=''
        onSubmit={(e: React.SyntheticEvent) => {
          e.preventDefault()

          updateList(Number(todoIDref.current?.value))
          dispatch(updateListRedux(Number(todoIDref.current?.value)))
        }}
      >
        <input type='number' ref={todoIDref} />
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

export default Form
