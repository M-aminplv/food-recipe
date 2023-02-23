import React from "react";
import { Link } from "react-router-dom";

function Header() {
	return (
		<header className=" header sticky  top-0 z-10  h-20 flex justify-around items-center ">
			<div className="text-5xl ml-10">food recipe</div>
			<ul className=" flex justify-around items-center gap-11">
				<Link to="/">
					<li className="text-3xl">home</li>
				</Link>
				<li className="text-3xl">search</li>
			</ul>
		</header>
	);
}

export default Header;
