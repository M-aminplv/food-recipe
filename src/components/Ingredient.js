import React from "react";

function Ingredient({ meals }) {
	if (meals) {
		var {
			strIngredient1,
			strIngredient2,
			strIngredient3,
			strIngredient4,
			strIngredient5,
			strIngredient6,
			strIngredient7,
			strIngredient8,
			strIngredient9,
			strIngredient10,
			strIngredient11,
			strIngredient12,
			strIngredient13,
			strIngredient14,
			strIngredient15,
			strIngredient16,
			strIngredient17,
			strIngredient18,
			strIngredient19,
			strIngredient20,
		} = meals[0];
	}
	return (
		<div className="grid grid-cols-2 justify-center items-center mx-auto gap-5 w-full sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4  ">
			{strIngredient1 && (
				<img
					src={`https://www.themealdb.com/images/ingredients/${strIngredient1}-small.png`}
					alt={strIngredient1}
					className="mx-auto transition-all ease transition-300 hover:scale-125"
				/>
			)}
			{strIngredient2 && (
				<img
					src={`https://www.themealdb.com/images/ingredients/${strIngredient2}-small.png`}
					alt={strIngredient2}
					className="mx-auto transition-all ease transition-300 hover:scale-125"
				/>
			)}
			{strIngredient3 && (
				<img
					src={`https://www.themealdb.com/images/ingredients/${strIngredient3}-small.png`}
					alt={strIngredient3}
					className="mx-auto transition-all ease transition-300 hover:scale-125"
				/>
			)}
			{strIngredient4 && (
				<img
					src={`https://www.themealdb.com/images/ingredients/${strIngredient4}-small.png`}
					alt={strIngredient4}
					className="mx-auto transition-all ease transition-300 hover:scale-125"
				/>
			)}
			{strIngredient5 && (
				<img
					src={`https://www.themealdb.com/images/ingredients/${strIngredient5}-small.png`}
					alt={strIngredient5}
					className="mx-auto transition-all ease transition-300 hover:scale-125"
				/>
			)}
			{strIngredient6 && (
				<img
					src={`https://www.themealdb.com/images/ingredients/${strIngredient6}-small.png`}
					alt={strIngredient6}
					className="mx-auto transition-all ease transition-300 hover:scale-125"
				/>
			)}
			{strIngredient7 && (
				<img
					src={`https://www.themealdb.com/images/ingredients/${strIngredient7}-small.png`}
					alt={strIngredient7}
					className="mx-auto transition-all ease transition-300 hover:scale-125"
				/>
			)}
			{strIngredient8 && (
				<img
					src={`https://www.themealdb.com/images/ingredients/${strIngredient8}-small.png`}
					alt={strIngredient8}
					className="mx-auto transition-all ease transition-300 hover:scale-125"
				/>
			)}
			{strIngredient9 && (
				<img
					src={`https://www.themealdb.com/images/ingredients/${strIngredient9}-small.png`}
					alt={strIngredient9}
					className="mx-auto transition-all ease transition-300 hover:scale-125"
				/>
			)}
			{strIngredient10 && (
				<img
					src={`https://www.themealdb.com/images/ingredients/${strIngredient10}-small.png`}
					alt={strIngredient10}
					className="mx-auto transition-all ease transition-300 hover:scale-125"
				/>
			)}
			{strIngredient11 && (
				<img
					src={`https://www.themealdb.com/images/ingredients/${strIngredient11}-small.png`}
					alt={strIngredient11}
					className="mx-auto transition-all ease transition-300 hover:scale-125"
				/>
			)}
			{strIngredient12 && (
				<img
					src={`https://www.themealdb.com/images/ingredients/${strIngredient12}-small.png`}
					alt={strIngredient12}
					className="mx-auto transition-all ease transition-300 hover:scale-125"
				/>
			)}
			{strIngredient13 && (
				<img
					src={`https://www.themealdb.com/images/ingredients/${strIngredient13}-small.png`}
					alt={strIngredient13}
					className="mx-auto transition-all ease transition-300 hover:scale-125"
				/>
			)}
			{strIngredient14 && (
				<img
					src={`https://www.themealdb.com/images/ingredients/${strIngredient14}-small.png`}
					alt={strIngredient14}
					className="mx-auto transition-all ease transition-300 hover:scale-125"
				/>
			)}
			{strIngredient15 && (
				<img
					src={`https://www.themealdb.com/images/ingredients/${strIngredient15}-small.png`}
					alt={strIngredient15}
					className="mx-auto transition-all ease transition-300 hover:scale-125"
				/>
			)}
			{strIngredient16 && (
				<img
					src={`https://www.themealdb.com/images/ingredients/${strIngredient16}-small.png`}
					alt={strIngredient16}
					className="mx-auto transition-all ease transition-300 hover:scale-125"
				/>
			)}
			{strIngredient17 && (
				<img
					src={`https://www.themealdb.com/images/ingredients/${strIngredient17}-small.png`}
					alt={strIngredient17}
					className="mx-auto transition-all ease transition-300 hover:scale-125"
				/>
			)}
			{strIngredient18 && (
				<img
					src={`https://www.themealdb.com/images/ingredients/${strIngredient18}-small.png`}
					alt={strIngredient18}
					className="mx-auto transition-all ease transition-300 hover:scale-125"
				/>
			)}
			{strIngredient19 && (
				<img
					src={`https://www.themealdb.com/images/ingredients/${strIngredient19}-small.png`}
					alt={strIngredient19}
					className="mx-auto transition-all ease transition-300 hover:scale-125"
				/>
			)}
			{strIngredient20 && (
				<img
					src={`https://www.themealdb.com/images/ingredients/${strIngredient20}-small.png`}
					alt={strIngredient20}
					className="mx-auto transition-all ease transition-300 hover:scale-125"
				/>
			)}
		</div>
	);
}

export default Ingredient;
