import styles from "./Spinner.module.css";

function Spinner() {
	return (
		<div
			className={`w-screen h-screen overflow-hidden flex items-center justify-center ${styles.cssSelector}`}>
			<div className={styles.loader}></div>
		</div>
	);
}

export function SpinnerCities() {
	return (
		<div
			style={{ backgroundColor: "transparent", background: "none" }}
			className={`w-full h-full overflow-hidden flex items-center justify-center ${styles.cssSelector}`}>
			<div className={styles.loader}></div>
		</div>
	);
}

export default Spinner;
