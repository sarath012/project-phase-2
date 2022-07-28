import { configureStore } from '@reduxjs/toolkit'
import shopcartSlice from './shopcartSlice'

export default configureStore({
  reducer: {
    shopcart: shopcartSlice,
  },
})