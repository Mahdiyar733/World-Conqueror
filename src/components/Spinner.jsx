import styles from "./Spinner.module.css";

function Spinner() {
	return (
		<div className="w-screen h-screen overflow-hidden flex items-center justify-center bg-[#2C3438]">
			<div className={styles.loader}></div>
		</div>
	);
}

export default Spinner;
