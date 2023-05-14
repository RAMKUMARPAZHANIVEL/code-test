import { createSlice } from '@reduxjs/toolkit';

const frontendSlice = createSlice({
  name: "frontendSlice",
  initialState: {
    frontend_details: {
      modelType: "",
      feTeckstack:{},
      FeTemplate:[],
      capablities:[],
      basicDetail:{}
    }
  },
  reducers: {
      SET_FRONTEND_MODEL_DETAIL: (state, action) => {
        state.frontend_details.modelType = action.payload;
      },
      SET_FRONTEND_FETECKSTACK: (state, action) => {
        state.frontend_details.feTeckstack = action.payload;
      },
      ADD_FRONTEND_FETEMPLATES: (state, action) => {
        state.frontend_details.FeTemplate = action.payload;
      },
      ADD_FRONTEND_CAPABLITIES: (state, action) => {
        state.frontend_details.capablities = action.payload;
      },
      SET_FRONTEND_BASIC_DETAIL: (state, action) => {
        state.frontend_details.basicDetail = action.payload;
      } 
  }
});

export const { SET_FRONTEND_MODEL_DETAIL, SET_FRONTEND_FETECKSTACK,ADD_FRONTEND_FETEMPLATES,ADD_FRONTEND_CAPABLITIES,SET_FRONTEND_BASIC_DETAIL } = frontendSlice.actions;
export default frontendSlice.reducer;