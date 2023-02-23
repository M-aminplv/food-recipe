import { filterAction } from "./filter-by-area";
const base_url = "https://www.themealdb.com/api/json/v1/1/filter.php?";
export const fetchByArea = (name) => {
	return async (dispach) => {
		const response = await fetch(
			`${base_url}${
				name.slice(0, 2) + name.charAt(2).toUpperCase() + name.slice(3)
			}`
		);
		console.log(
			`${base_url}${
				name.slice(0, 2) + name.charAt(2).toUpperCase() + name.slice(3)
			}`
		);
		const data = await response.json();
		dispach(filterAction.showdata(data));

		// if (!response.ok) {
		// 	throw new Error("Could not fetch data");
		// }
		// try {
		// 	dispach(filterAction.showdata(data));
		// } catch (error) {
		// 	dispach(filterAction.showdata(error));
		// }
	};
};
