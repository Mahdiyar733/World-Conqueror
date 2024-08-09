/* eslint-disable react/prop-types */
import styles from "./AppLayout.module.css";
import Sidebar from "../components/Sidebar";
import Map from "../components/Map";
function AppLayout({ err }) {
	return (
		<div className={styles.app}>
			<Sidebar err={err} />
			<Map />
		</div>
	);
}

export default AppLayout;
