/* eslint-disable react/prop-types */
function Button({ children, classes, handler, dis }) {
	return (
		<button
			className={`btn ${classes} animate-fade`}
			disabled={dis}
			onClick={handler}>
			{children}
		</button>
	);
}

export default Button;
