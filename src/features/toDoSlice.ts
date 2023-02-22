import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
// import type { RootState } from '../../app/store'

// Define a type for the slice state
interface toDoState {
  toDoid: number[]
}

// Define the initial state using that type
const initialState: toDoState = {
  toDoid: [12, 22],
}

export const counterSlice = createSlice({
  name: 'toDo',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    updateListRedux: (state, action: PayloadAction<number>) => {
      state.toDoid = [...state.toDoid, action.payload]
    },
    deleteList: (state, action: PayloadAction<number>) => {
      state.toDoid = state.toDoid.filter((id) => {
        if (id != action.payload) {
          return id
        }
      })
    },
  },
})

export const { updateListRedux, deleteList } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer
