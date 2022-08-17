import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	counter: 0,
};

export const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		updateDashboard: (state, action) => {
			state.counter = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, updateDashboard } =
	counterSlice.actions;

export const selectDashboard = (state) => state.counter;

export default counterSlice.reducer;
