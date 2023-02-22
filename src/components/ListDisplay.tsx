import React, { Dispatch } from 'react'
import { UseTodoContext } from '../context/TodoContext'
import { useAppSelector, useAppDispatch } from '../hooks'
import { deleteList } from '../features/toDoSlice'
import './ListDisplay.css'
const ListDisplay = () => {
  const toDoList = useAppSelector((state) => state.toDoReducer)
  const { list } = UseTodoContext()
  const dispatch: Dispatch<any> = useAppDispatch()
  console.log('current', toDoList)
  return (
    <div>
      {toDoList.toDoid.map((value) => {
        return (
          <div className='list-container'>
            <h2>{value}</h2>
            <button
              className='btn'
              onClick={() => {
                dispatch(deleteList(value))
              }}
            >
              delete
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default ListDisplay
