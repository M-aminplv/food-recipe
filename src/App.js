import { Routes, Route } from "react-router-dom";
import Category from "./components/Category";

import Header from "./components/Header";

import ShowMeal from "./components/ShowMeal";
import Home from "./pages/Home";
import Ingrediens from "./pages/Ingrediens";
import SpesificCategory from "./pages/SpesificCategory";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/:id" element={<ShowMeal />} />
				<Route path="/category" element={<Category />} />
				<Route path="/category/:id" element={<SpesificCategory />} />
				<Route path="/ingredient" element={<Ingrediens />} />
			</Routes>
		</>
	);
}

export default App;
