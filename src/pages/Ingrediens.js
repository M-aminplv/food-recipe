import { useState, useEffect } from "react";

function Ingrediens() {
	const [item, setItem] = useState("");

	const url = `https://www.themealdb.com/api/json/v1/1/list.php?i=list`;
	useEffect(() => {
		async function getdata() {
			const response = await fetch(`${url}`);
			const data = await response.json();

			setItem(data);
		}
		getdata();
	}, []);
	if (!item) {
		return <h1 className="text-4xl">Loading</h1>;
	}
	return (
		<div className="grid grid-cols-4">
			{item &&
				item.meals.map((item, index) => {
					console.log(item.idIngredient);
					return (
						<div key={item.idIngredient}>
							{index <= 500 && (
								<div>
									<img
										src={`https://www.themealdb.com/images/ingredients/${item.strIngredient}.png`}
										alt={item.strIngredient}
										className="w-96 h-96"
									/>
								</div>
							)}
						</div>
					);
				})}
		</div>
	);
}

export default Ingrediens;
