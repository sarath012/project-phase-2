import { createSlice } from '@reduxjs/toolkit'

export const shopcartSlice = createSlice({
  name: 'shopcart',
  initialState: {
    isLoggedIn : false,
    selectedProduct : null,
    sortArray : "",
    titleFilter : "",
    filter : {
      brand: [],
      category: [],
      stock: true,
    },
    cart : [],
    data: null, 
  },
  reducers: {
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload
    },
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload
    },
    setSortArray: (state, action) => {
      state.sortArray = action.payload
    },
    setTitleFilter: (state, action) => {
      state.titleFilter = action.payload
    },
    setFilter: (state, action) => {
      state.filter = action.payload
    },
    setCart: (state, action) => {
      state.cart = action.payload
    },
    setData: (state, action) => {
        state.data = action.payload
      },
  }
})

// Action creators are generated for each case reducer function
export const { setIsLoggedIn,setSelectedProduct,setSortArray,setTitleFilter,setFilter,setCart,setData} = shopcartSlice.actions

export default shopcartSlice.reducer