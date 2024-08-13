/* eslint-disable react/prop-types */
function Button({ children, classes, handler, dis = false }) {
	return (
		<button
			className={`btn ${classes} animate-fade`}
			disabled={dis}
			style={{ zIndex: "1000" }}
			onClick={handler}>
			{children}
		</button>
	);
}

export default Button;
