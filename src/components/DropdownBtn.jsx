/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import MenuSvg from "../svg/MenuSvg";
import styles from "./DDBtn.module.css";
import CloseSvg from "../svg/CloseSvg";
import { NavLink } from "react-router-dom";

export const DropdownContext = createContext();

export function DropdownProvider({ children }) {
	const [isOpen, setIsOpen] = useState(false);

	function handleOpening() {
		setIsOpen((is) => !is);
	}

	return (
		<DropdownContext.Provider value={{ isOpen, setIsOpen, handleOpening }}>
			{children}
		</DropdownContext.Provider>
	);
}

function DropdownBtn() {
	const { isOpen, handleOpening, setIsOpen } = useContext(DropdownContext);

	useEffect(() => {
		if (isOpen) setIsOpen(false);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div
			className="flex md:hidden mr-7"
			style={{ zIndex: 1000 }}>
			<button
				type="button"
				onClick={handleOpening}>
				{isOpen ? <CloseSvg /> : <MenuSvg />}
			</button>
			{isOpen ? (
				<div
					className={`${styles.menu} flex flex-col p-6 gap-6 items-center absolute top-48 mt-2 rounded-lg right-0 left-0 mb-8 bg-[#72787E] animate-fade`}>
					<NavLink
						to="/"
						className={({ isActive }) =>
							`hover:bg-primary hover:text-[#ECECEC] transition-all duration-150 py-5 animate-fade-right animate-delay-200 flex-1 w-full flex items-center justify-center rounded-lg text-3xl font-semibold ${
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
							`hover:bg-primary hover:text-[#ECECEC] transition-all duration-150  py-5 animate-fade-right animate-delay-200 flex-1 w-full flex items-center justify-center rounded-lg text-3xl font-semibold ${
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
