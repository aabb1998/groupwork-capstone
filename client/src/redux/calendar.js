import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	events: {},
};

export const eventsSlice = createSlice({
	name: "events",
	initialState,
	reducers: {
		update: (state, action) => {
			state.events = actions.payload;
		},
	},
});

export const { update } = eventsSlice.actions;

export const selectEvents = (state) => state.events;

export default eventsSlice.reducer;
