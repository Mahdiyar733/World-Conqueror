import { useState } from "react";
import MenuSvg from "../svg/MenuSvg";
import CloseSvg from "../svg/CloseSvg";
import { NavLink } from "react-router-dom";
function DropdownBtn() {
	const [isOpen, setIsOpen] = useState(false);

	function handleOpening() {
		setIsOpen((is) => !is);
	}

	return (
		<div className="flex md:hidden mr-7">
			<button
				type="button"
				onClick={handleOpening}>
				{isOpen ? <CloseSvg /> : <MenuSvg />}
			</button>
			{isOpen ? (
				<div className="flex flex-col p-6 gap-6 items-center absolute top-full mt-2 rounded-lg right-0 left-0 mb-8 bg-[#72787E] h-auto animate-fade-left animate-duration-500 animate-ease-in-out">
					<NavLink
						to="/"
						className={({ isActive }) =>
							`hover:bg-primary hover:text-[#ECECEC] transition-all duration-150  py-5 animate-fade-right animate-delay-200 flex-1 w-full flex items-center justify-center rounded-lg text-3xl font-semibold ${
								isActive
									? "bg-primary text-[#ECECEC] no-animation cursor-auto"
									: "bg-[#ECECEC] btn text-primary"
							}`
						}>
						Home
					</NavLink>

					<NavLink
						to="/product"
						className={({ isActive }) =>
							`hover:bg-primary hover:text-[#ECECEC] transition-all duration-150  py-5 animate-fade-right animate-delay-300 flex-1 w-full flex items-center justify-center rounded-lg text-3xl font-semibold ${
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
							`hover:bg-primary hover:text-[#ECECEC] transition-all duration-150  py-5 animate-fade-right animate-delay-500 flex-1 w-full flex items-center justify-center rounded-lg text-3xl font-semibold ${
								isActive
									? "bg-primary text-[#ECECEC] no-animation cursor-auto"
									: "bg-[#ECECEC] btn text-primary"
							}`
						}>
						Pricing
					</NavLink>
				</div>
			) : (
				""
			)}
		</div>
	);
}

export default DropdownBtn;
