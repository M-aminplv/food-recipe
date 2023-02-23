import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { fetchByArea } from "../store/filter-action";

function DisplayImage({ name }) {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchByArea(name));
	}, [dispatch, name]);

	const cartItems = useSelector((state) => state.filterArea.items);
	if (!cartItems.meals) {
		return <h1 className="text-center text-5xl">loading.....</h1>;
	}
	return (
		<>
			{cartItems.meals &&
				cartItems.meals.map((item) => {
					return (
						<Link
							to={`/${item.idMeal}`}
							key={item.idMeal}
							className="box mx-auto flex flex-col gap-3 max-w-xs rounded-lg p-4 hover:scale-110 duration-500	">
							<p className="text-2xl font-normal	text-black   w-72 max-h-fit text-center truncate ">
								{item.strMeal}
							</p>
							<img
								src={item.strMealThumb}
								alt={item.srtMeal}
								className="h-72 w-72 rounded-lg"
							/>
						</Link>
					);
				})}
		</>
	);
}

export default DisplayImage;
