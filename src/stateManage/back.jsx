import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  value: ''
}

export const bg = createSlice({
  name: 'back',
  initialState,
  reducers: {
   back_slice: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { back_slice } = bg.actions

export default bg.reducer