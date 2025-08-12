import {configStore} from '@reduxjs/toolkit'

const store = configureStore({
  reducer: counterSlice.reducer
})