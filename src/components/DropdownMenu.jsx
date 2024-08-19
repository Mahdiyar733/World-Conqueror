import { NavLink } from "react-router-dom";

function DropdownMenu() {
	return (
		<div
			className={`flex flex-col p-6 gap-6 items-center rounded-lg backdrop-blur-lg backdrop-brightness-125 backdrop-hue-rotate-30 animate-fade-up animate-duration-200 w-full`}>
			<NavLink
				to="/"
				className={({ isActive }) =>
					`hover:bg-primary hover:text-[#ECECEC] transition-all duration-150 py-5 animate-fade animate-duration-200 animate-delay-100 flex-1 w-full flex items-center justify-center rounded-lg text-3xl font-semibold ${
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
					`hover:bg-primary hover:text-[#ECECEC] transition-all duration-150  py-5 animate-fade animate-duration-200 animate-delay-200 flex-1 w-full flex items-center justify-center rounded-lg text-3xl font-semibold ${
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
					`hover:bg-primary hover:text-[#ECECEC] transition-all duration-150  py-5 animate-fade animate-duration-200 animate-delay-300 flex-1 w-full flex items-center justify-center rounded-lg text-3xl font-semibold ${
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
					`hover:bg-primary hover:text-[#ECECEC] transition-all duration-150  py-5 animate-fade animate-duration-200 animate-delay-[400ms] flex-1 w-full flex items-center justify-center rounded-lg text-3xl font-semibold ${
						isActive
							? "bg-primary text-[#ECECEC] no-animation cursor-auto"
							: "bg-[#ECECEC] btn text-primary"
					}`
				}>
				Pricing
			</NavLink>
		</div>
	);
}

export default DropdownMenu;
