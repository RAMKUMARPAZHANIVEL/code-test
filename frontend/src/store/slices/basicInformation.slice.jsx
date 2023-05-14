import { createSlice } from '@reduxjs/toolkit';

const basicInformationSlice = createSlice({
  name: "basicInformationSlice",
  initialState: {
    path: "",
    projectType : sessionStorage.getItem("project_type"),
  },
  reducers: {
    SET_ACTIVE_PATH: (state, action) => {
      state.path = action.payload;
    },
    SET_PROJECT_TYPE: (state, action) => {
      state.projectType = action.payload;
    }
  }
});

export const { SET_ACTIVE_PATH,SET_PROJECT_TYPE } = basicInformationSlice.actions;
export default basicInformationSlice.reducer;