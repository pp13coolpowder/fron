import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  value: 1,
}

export const Id_ = createSlice({
  name: 'id_aaa',
  initialState,
  reducers: {
   id_slice: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { id_slice } = Id_.actions

export default Id_.reducer