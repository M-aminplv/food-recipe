import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/Loading";

function SpesificCategory() {
	const [item, setItem] = useState("");
	const id = useParams().id;
	console.log(id);
	const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`;
	useEffect(() => {
		async function getdata() {
			const response = await fetch(`${url}`);
			const data = await response.json();
			console.log(response);
			setItem(data);
		}
		getdata();
	}, []);

	!item && <Loading />;

	return (
		<div className="grid grid-cols-1 mx-auto w-10/12 my-10 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 animate-[load_1s_ease]">
			{item &&
				item.meals.map((item) => {
					return (
						<Link
							to={`/${item.idMeal}`}
							key={item.idMeal}
							className="box mx-auto p-3">
							<h2 className="mb-5 text-center text-xl text-amber-700">
								{item.strMeal}
							</h2>
							<img
								src={item.strMealThumb}
								alt={item.strMeal}
								className="rounded-xl"
							/>
						</Link>
					);
				})}
		</div>
	);
}

export default SpesificCategory;
