import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import authService from "./authService.js";






// use this function in login page
export const login = createAsyncThunk("auth/login",async(inputValues,thunkAPI)=>{
    try {
        return await authService.loginUser(inputValues)
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})
 
const getUserDataFromLocalStorage = window.localStorage.getItem("user") ? JSON.parse(window.localStorage.getItem("user")) : null;

const initialState = {
    user : getUserDataFromLocalStorage,
    status : "idle",
    error : null
}

//use this export in store file,authReducer
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    incrementByAmount: (state, action) => {
        state.value += action.payload
      },
  },
  
  extraReducers : (situation)=>{
    situation.addCase(login.pending , (state)=>{
        state.status = "loading"
    }).addCase(login.fulfilled , (state,action)=>{ 
        state.status = "succeeded"
        state.user = action.payload
    }).addCase(login.rejected , (state,action)=>{
        state.status = "failed"
        state.error = action.payload
    })
  }
})

// Action creators are generated for each case reducer function
export const {  incrementByAmount } = authSlice.actions

export default authSlice.reducer