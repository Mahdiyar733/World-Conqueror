/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";
import { useCities } from "../contexts/CitiesContext";
import { useEffect, useState } from "react";

const formatDate = (date) =>
	new Intl.DateTimeFormat("en", {
		day: "numeric",
		month: "long",
		year: "numeric",
	}).format(new Date(date));

function CityItem({ city }) {
	const { currCity } = useCities();
	const { cityName, emoji, date, id, position } = city;
	const [isCurr, setIsCurr] = useState(false);
	useEffect(() => {
		setIsCurr(id === currCity.id);
	}, [id, currCity.id]);

	return (
		<li key={id}>
			<Link
				to={`${id}?lat=${position.lat}&lng=${position.lng}`}
				className={`${styles.cityItem} ${
					isCurr ? styles["cityItem--active"] : ""
				}`}>
				<span className={styles.emoji}>{emoji}</span>
				<h3 className={styles.name}>{cityName}</h3>
				<time className={styles.date}>({formatDate(date)})</time>
				<button className={styles.deleteBtn}>&times;</button>
			</Link>
		</li>
	);
}

export default CityItem;
