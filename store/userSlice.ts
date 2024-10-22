import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    data: null,
    sessionToken: null,
  },
  reducers: {
    updateUser: (state, action) => {
      state.data = action.payload;
    },
    updateSessionToken: (state, action) => {
      state.sessionToken = action.payload;
    },
  },
});

export const { updateUser, updateSessionToken } = userSlice.actions;

export default userSlice.reducer;
