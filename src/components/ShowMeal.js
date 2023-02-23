import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchById } from "../store/filter-id";
import Ingredient from "./Ingredient";

function ShowMeal() {
	const dispatch = useDispatch();
	const id = useParams().id;

	useEffect(() => {
		dispatch(fetchById(id));
	}, [dispatch]);
	const { meals } = useSelector((state) => state.filterArea.items);

	if (meals) {
		var {
			strMealThumb,
			strMeal,
			strInstructions,
			strCategory,
			strArea,
			strTags,
			strYoutube,
		} = meals[0];
	}

	return (
		<div className="box flex flex-col gap-5   max-w-7xl mx-3  md:flex-row md:justify-around  md:mx-3 lg:h-fit lg:mx-3 lg:my-10 xl:mx-auto  xl:mb-20  animate-[load_.5s_ease-in] ">
			<div className=" mx-auto mt-5  md:w-[80%] md:mx-3">
				<h2 className="text-2xl font-bold mb-4 text-center">{strMeal}</h2>
				<img
					src={strMealThumb}
					alt={strMeal}
					className="w-full h-96 mx-auto rounded-lg md:w-[400px] mb-4 lg:hover:scale-125	transition-all ease-linear transition-300"
				/>
				<div className="flex justify-between">
					<p className="text-xl font-bold mx-auto">delicious {strCategory}</p>
					<p className="text-xl font-bold mx-auto"> {strArea} food</p>
				</div>
				<h2 className="text-2xl text-center my-3">Ingredients</h2>
				<Ingredient meals={meals} />
			</div>

			{strInstructions && (
				<details className="text-left mx-5  my-10 text-xl leading-8	 md:w-3/4 ">
					<summary>{strInstructions.slice(0, 100)}</summary>
					{strInstructions.slice(100)}
				</details>
			)}
		</div>
	);
}

export default ShowMeal;
