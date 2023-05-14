import { createSlice } from '@reduxjs/toolkit';

const fullstackSlice = createSlice({
  name: "fullstackSlice",
  initialState: {
    fullstack_details: {
      modelType: "",
      feTeckstack:{},
      FeTemplate:[],
      backend: {},
      database:{},
      capablities:[],
      basicDetail:{}
    }
  },
  reducers: {
      SET_MODEL_DETAIL: (state, action) => {
        state.fullstack_details.modelType = action.payload;
      },
      SET_FETECKSTACK: (state, action) => {
        state.fullstack_details.feTeckstack = action.payload;
      },
      ADD_FETEMPLATES: (state, action) => {
        state.fullstack_details.FeTemplate = action.payload;
      },
      SET_BACKEND: (state, action) => {
        state.fullstack_details.backend = action.payload;
      },
      SET_DATABASE: (state, action) => {
        state.fullstack_details.database = action.payload;
      },
      ADD_CAPABLITIES: (state, action) => {
        state.fullstack_details.capablities = action.payload;
      },
      SET_BASIC_DETAIL: (state, action) => {
        state.fullstack_details.basicDetail = action.payload;
      } 
  }
});

export const { SET_MODEL_DETAIL,SET_FETECKSTACK,ADD_FETEMPLATES,ADD_CAPABLITIES,SET_BACKEND,SET_BASIC_DETAIL,SET_DATABASE } = fullstackSlice.actions;
export default fullstackSlice.reducer;