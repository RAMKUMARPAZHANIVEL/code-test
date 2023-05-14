import { createSlice } from '@reduxjs/toolkit';

const backendSlice = createSlice({
  name: "backendSlice",
  initialState: {
    backend_details: {
      modelType: "",
      backend: {},
      database:"",
      capablities:[],
      basicDetail:{}
    }
  },
  reducers: {
      SET_BACKEND_MODEL_DETAIL: (state, action) => {
        state.backend_details.modelType = action.payload;
      },
      SET_BACKEND_BACKEND: (state, action) => {
        state.backend_details.backend = action.payload;
      },
      SET_BACKEND_DATABASE: (state, action) => {
        state.backend_details.database = action.payload;
      },
      ADD_BACKEND_CAPABLITIES: (state, action) => {
        state.backend_details.capablities = action.payload;
      },
      SET_BACKEND_BASIC_DETAIL: (state, action) => {
        state.backend_details.basicDetail = action.payload;
      } 
  }
});

export const { SET_BACKEND_MODEL_DETAIL,SET_BACKEND_BACKEND,SET_BACKEND_DATABASE,ADD_BACKEND_CAPABLITIES,SET_BACKEND_BASIC_DETAIL } = backendSlice.actions;
export default backendSlice.reducer;