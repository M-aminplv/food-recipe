import { filterAction } from "./filter-by-area";
const base_url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
export const fetchById = (id) => {
	return async (dispach) => {
		const response = await fetch(`${base_url}${id}`);
		const data = await response.json();
		dispach(filterAction.showdata(data));
		console.log(data);

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
