import { createSlice } from "@reduxjs/toolkit";

////The initial state value for this slice of state

export const employeSlice = createSlice({
  name: "employee",
  initialState: {
    employe: null,
  },

  //////// The initial state for the reducer
  reducers: {
    login: (state, action) => {
      state.employe = action.payload;
    },
    logout: (state) => {
      state.employe = null;
    },
  },
});

export const { login, logout } = employeSlice.actions;

export const selectUser = (state) => state.employe.employe;

export default employeSlice.reducer;
