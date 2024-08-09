import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import DropdownBtn from "./DropdownBtn";

function PageNav() {
	return (
		<nav className="navbar bg-ghost backdrop-blur-sm px-4 py-2 rounded-xl backdrop-brightness-125 min-h-[95px]">
			<div className="flex-1 h-20 ml-7">
				<Logo />
			</div>
			<DropdownBtn />
			<div className="flex-none hidden md:flex">
				<ul className="menu menu-horizontal px-1 gap-3">
					<li className="text-3xl lg:text-4xl p-4 lg:p-6 font-semibold">
						<NavLink
							style={({ isActive }) => {
								return {
									color: isActive ? "#4a00ff" : "",
									backgroundColor: "transparent",
								};
							}}
							to="/"
							className="p-4 hover:text-primary hover:bg-transparent">
							Home
						</NavLink>
					</li>
					<li className="text-3xl lg:text-4xl p-4 lg:p-6 font-semibold">
						<NavLink
							style={({ isActive }) => {
								return {
									color: isActive ? "#7d4df8" : "",
									backgroundColor: "transparent",
								};
							}}
							to="/pricing"
							className="p-4 hover:text-primary hover:bg-transparent">
							Pricing
						</NavLink>
					</li>
					<li className="text-3xl lg:text-4xl p-4 lg:p-6 font-semibold">
						<NavLink
							style={({ isActive }) => {
								return {
									color: isActive ? "#7d4df8" : "",
									backgroundColor: "transparent",
								};
							}}
							to="/product"
							className="p-4 hover:text-primary hover:bg-transparent">
							Product
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default PageNav;
