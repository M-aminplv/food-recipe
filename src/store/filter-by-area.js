import { createSlice } from "@reduxjs/toolkit";

const filterByArea = createSlice({
	name: "filterByArea",
	initialState: { items: {} },
	reducers: {
		showdata(state, action) {
			state.items = action.payload;
		},
	},
});

export const filterAction = filterByArea.actions;

export default filterByArea;
