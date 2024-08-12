/* eslint-disable react/prop-types */
import styles from "./AppLayout.module.css";
import Sidebar from "../../components/Sidebar";
import Map from "../../components/Map";
import { createContext, useState } from "react";
import Toast from "../../components/utils/Toast";

export const AppContext = createContext();

function AppLayout({ err }) {
	const [isOpenToast, setIsOpenToast] = useState(false);
	const [isAnimating, setIsAnimating] = useState(false);
	return (
		<AppContext.Provider
			value={{ err, isAnimating, isOpenToast, setIsAnimating, setIsOpenToast }}>
			<div className={styles.app}>
				<Sidebar />
				<Map />
				<Toast
					isAnimating={isAnimating}
					isOpenToast={isOpenToast}
					setIsAnimating={setIsAnimating}
					setIsOpenToast={setIsOpenToast}>
					Your City added successfully !
				</Toast>
			</div>
		</AppContext.Provider>
	);
}

export default AppLayout;
