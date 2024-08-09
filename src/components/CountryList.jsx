/* eslint-disable react/prop-types */
import Spinner from "./Spinner";
import styles from "./CountryList.module.css";
import Message from "./Message";
import CountryItem from "./CountryItem";
function CountryList({ cities, isLoading }) {
	if (isLoading) return <Spinner />;

	if (!cities.length)
		return <Message message="Add your first city by clicking on map !" />;

	const countries = cities.reduce((arr, city) => {
		if (!arr.map((el) => el.country).includes(city.country))
			return [...arr, { country: city.country, emoji: city.emoji }];
		else return arr;
	}, []);

	return (
		<ul className={styles.countryList}>
			{countries.map((item) => (
				<CountryItem
					key={item.id}
					country={item}
				/>
			))}
		</ul>
	);
}

export default CountryList;
