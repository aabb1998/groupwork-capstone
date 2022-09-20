import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import userReducer from "./user";
import eventReducer from "./calendar";

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		user: userReducer,
		events: eventReducer,
	},
});
