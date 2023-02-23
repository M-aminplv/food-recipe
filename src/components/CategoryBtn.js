import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CategoryBtn() {
	function handleSearch(e) {}

	return (
		<div className="flex justify-center items-center gap-6 animate-[load_1s_ease]">
			<Link
				to="/category"
				onClick={(e) => handleSearch(e)}
				className="text-3xl mt-10 font-bold text-amber-700">
				Categories
			</Link>
			<Link to="/Area" className="text-3xl mt-10 font-bold text-amber-700">
				Areas
			</Link>
			<Link to="Ingredient" className="text-3xl mt-10 font-bold text-amber-700">
				Ingredients
			</Link>
		</div>
	);
}

export default CategoryBtn;
