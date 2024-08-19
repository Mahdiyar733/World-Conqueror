/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import MenuSvg from "../svg/MenuSvg";
import CloseSvg from "../svg/CloseSvg";
import DropdownMenu from "./DropdownMenu";

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
		</div>
	);
}

export default DropdownBtn;
