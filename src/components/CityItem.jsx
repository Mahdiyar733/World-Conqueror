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
	const { currCity, deleteCity } = useCities();
	const { cityName, emoji, date, id, position } = city;
	const [isCurr, setIsCurr] = useState(false);
	useEffect(() => {
		setIsCurr(id === currCity.id);
	}, [id, currCity.id]);

	function handleDelete(e) {
		e.preventDefault();
		deleteCity(id);
	}

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
				<button
					className="btn btn-error btn-square rounded-lg hover:btn-outline transition-all duration-200"
					onClick={(e) => handleDelete(e)}>
					<svg
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</Link>
		</li>
	);
}

export default CityItem;
