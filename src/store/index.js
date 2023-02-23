import { configureStore } from "@reduxjs/toolkit";

import filterByArea from "./filter-by-area";
import filter from "./filter";

const store = configureStore({
	reducer: {
		filterArea: filterByArea.reducer,
		filter: filter.reducer,
	},
});

export default store;
