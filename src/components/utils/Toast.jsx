import { useEffect } from "react";

/* eslint-disable react/prop-types */
function Toast({
	isAnimating,
	isOpenToast,
	children,
	setIsAnimating,
	setIsOpenToast,
}) {
	useEffect(() => {
		const timer = setTimeout(() => {
			setIsAnimating(false);
			setTimeout(() => {
				setIsOpenToast(false);
			}, 800);
		}, 2000);
		return function () {
			clearTimeout(timer);
		};
	}, [isOpenToast]);

	return (
		<>
			{isOpenToast && (
				<div
					className={`toast toast-end min-w-[250px] ${
						isAnimating
							? isOpenToast && "animate-fade-left"
							: "animate-jump-out"
					} animate-duration-300`}>
					<div
						className={`alert alert-success text-2xl p-4 font-normal flex flex-row`}>
						{children}
					</div>
				</div>
			)}
		</>
	);
}

export default Toast;