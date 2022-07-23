import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    test: 'test',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    update: (state, action) => {
      state.user = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { update } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
