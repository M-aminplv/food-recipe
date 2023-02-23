import { useEffect, useState } from "react";

import DisplayImage from "../components/DisplayImage";

import CategoryBtn from "../components/CategoryBtn";

function Home() {
	const [name, setName] = useState("a=Canadian");

	return (
		<>
			<CategoryBtn />

			<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4	my-20 animate-[load_1s_ease] ">
				<DisplayImage name={name} />
			</div>
		</>
	);
}

export default Home;
