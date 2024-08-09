/* eslint-disable react/prop-types */
import Spinner from "./Spinner";
import styles from "./CityList.module.css";
import Message from "./Message";
import CityItem from "./CityItem";
function CityList({ cities, isLoading }) {
	if (isLoading) return <Spinner />;

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
