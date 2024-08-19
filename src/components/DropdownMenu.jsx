import { NavLink } from "react-router-dom";

function DropdownMenu() {
	return (
		<div className="w-full mt-6	md:hidden flex items-center justify-center">
			<div
				className={`flex flex-col p-6 gap-6 items-center rounded-lg backdrop-blur-lg backdrop-brightness-125 backdrop-hue-rotate-30 animate-fade-down animate-duration-300 w-full`}>
				<NavLink
					to="/"
					className={({ isActive }) =>
						`hover:bg-primary hover:text-[#ECECEC] transition-all duration-150 py-5 flex-1 w-full flex items-center justify-center rounded-lg text-3xl font-semibold ${
							isActive
								? "bg-primary text-[#ECECEC] no-animation cursor-auto"
								: "bg-[#ECECEC] btn text-primary"
						}`
					}>
					Home
				</NavLink>

				<NavLink
					to="/login"
					className={({ isActive }) =>
						`hover:bg-primary hover:text-[#ECECEC] transition-all duration-150  py-5 flex-1 w-full flex items-center justify-center rounded-lg text-3xl font-semibold ${
							isActive
								? "bg-primary text-[#ECECEC] no-animation cursor-auto"
								: "bg-[#ECECEC] btn text-primary"
						}`
					}>
					Login
				</NavLink>

				<NavLink
					to="/product"
					className={({ isActive }) =>
						`hover:bg-primary hover:text-[#ECECEC] transition-all duration-150  py-5 flex-1 w-full flex items-center justify-center rounded-lg text-3xl font-semibold ${
							isActive
								? "bg-primary text-[#ECECEC] no-animation cursor-auto"
								: "bg-[#ECECEC] btn text-primary"
						}`
					}>
					Product
				</NavLink>

				<NavLink
					to="/pricing"
					className={({ isActive }) =>
						`hover:bg-primary hover:text-[#ECECEC] transition-all duration-150  py-5 flex-1 w-full flex items-center justify-center rounded-lg text-3xl font-semibold ${
							isActive
								? "bg-primary text-[#ECECEC] no-animation cursor-auto"
								: "bg-[#ECECEC] btn text-primary"
						}`
					}>
					Pricing
				</NavLink>
			</div>
		</div>
	);
}

export default DropdownMenu;
