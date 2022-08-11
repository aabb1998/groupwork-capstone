import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  user: {},
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    update: (state, action) => {
      state.user = action.payload;
    },
    updateFromApi: async (state, action) => {
      const updatedUser = await axios.get(
        `http://localhost:3000/api/finduser/${action.payload}`
      );
      state.user = updatedUser;
    },
  },
});

// Action creators are generated for each case reducer function
export const { update, updateFromApi } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
