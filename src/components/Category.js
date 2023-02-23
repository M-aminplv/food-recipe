import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Category() {
	const [item, setItem] = useState("");
	useEffect(() => {
		async function getdata() {
			const response = await fetch(
				"https://www.themealdb.com/api/json/v1/1/categories.php"
			);
			const data = await response.json();

			setItem(data);
		}
		getdata();
	}, []);
	return (
		<>
			<h1 className="text-center text-3xl mt-5 text-amber-700 font-bold animate-[load_1s_ease]">
				Categories
			</h1>
			<div className="grid grid-cols-1 gap-10  mx-auto my-10 md:grid-cols-2  xl:grid-cols-4 animate-[load_1s_ease]">
				{item &&
					item.categories.map((item) => {
						return (
							<Link
								to={`/category/${item.strCategory}`}
								key={item.idCategory}
								className=" box mx-auto p-3">
								<h2 className="text-2xl text-center">{item.strCategory}</h2>
								<img
									src={item.strCategoryThumb}
									alt={item.strCategory}
									className="rounded-2xl"
								/>
							</Link>
						);
					})}
			</div>
		</>
	);
}

export default Category;
