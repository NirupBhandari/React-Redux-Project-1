import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
  },
});

export const { setFirstName, setLastName } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
