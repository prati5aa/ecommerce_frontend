import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from '../features/counter/counterSlice'
import authReducer from '../features/user/authSlice'

export const store = configureStore({
  reducer: {
    auth:authReducer
  },
})