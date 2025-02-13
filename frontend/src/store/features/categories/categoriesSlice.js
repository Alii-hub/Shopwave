import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import categoriesService from "../categories/categoriesService";




// use this function in categories 
export const AddCategory = createAsyncThunk(
  "categories/AddCategory",
  async (inputValues, thunkAPI) => {
    try {
      const response = await categoriesService.createCat(inputValues);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// use this function in categories 

export const getAllCategories = createAsyncThunk(
  "categories/getAllCategories",
  async ( thunkAPI) => {
    try {
      const response = await categoriesService.getAllCat();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);



const initialState = {
  categories: [],
  status: "idle",
  error: null,
};

//use this export in store file,authReducer
export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },

  extraReducers: (situation) => {
    situation
      .addCase(AddCategory.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(AddCategory.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.categories = action.payload;
      })
      .addCase(AddCategory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(getAllCategories.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.categories = action.payload;
      })
      .addCase(getAllCategories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      
  },
});

// Action creators are generated for each case reducer function
// export const { incrementByAmount } = categoriesSlice.actions;

export default categoriesSlice.reducer;
