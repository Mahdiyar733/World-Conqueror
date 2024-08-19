/* eslint-disable react/prop-types */
import { SpinnerCities } from "./Spinner";
import styles from "./CityList.module.css";
import Message from "./Message";
import CityItem from "./CityItem";
import { useCities } from "../contexts/CitiesContext";
function CityList() {
	const { cities, isLoading } = useCities();
	if (isLoading) return <SpinnerCities />;

	if (!cities.length)
		return <Message message="Add your first city by clicking on map !" />;

	return (
		<ul className={styles.cityList}>
			{cities.map((item) => (
				<CityItem
					key={item.id}
					city={item}
				/>
			))}
		</ul>
	);
}

export default CityList;
