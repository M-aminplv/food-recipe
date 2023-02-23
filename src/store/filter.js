import { createSlice } from "@reduxjs/toolkit";

const filter = createSlice({
	name: "filter",
	initialState: "",
	reducers: {
		filter(state, action) {
			state = action;
		},
	},
});

export const filterAction = filter.actions;

export default filter;
