import { filterAction } from "./filter";
const base_url = "www.themealdb.com/api/json/v1/1/categories.php";
export const filterButton = (item) => {
	return async (dispach) => {
		const response = await fetch(`${base_url}`);
		const data = await response.json();
		dispach(filterAction.filter(data));
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
