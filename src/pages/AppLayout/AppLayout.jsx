/* eslint-disable react/prop-types */
import styles from "./AppLayout.module.css";
import Sidebar from "../../components/Sidebar";
import Map from "../../components/Map";
import { createContext, useEffect, useState } from "react";
import Toast from "../../components/utils/Toast";
import { useCities } from "../../contexts/CitiesContext";
import User from "../../components/User";

export const AppContext = createContext();

function AppLayout({ err }) {
	const [isOpenToast, setIsOpenToast] = useState(false);
	const [isAnimating, setIsAnimating] = useState(false);
	const { setCurrCity } = useCities();

	useEffect(() => {
		setCurrCity({});
	}, [setCurrCity]);

	return (
		<AppContext.Provider
			value={{ err, isAnimating, isOpenToast, setIsAnimating, setIsOpenToast }}>
			<div className={styles.app}>
				<Sidebar />
				<Map />
				<User />
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
