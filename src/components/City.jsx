/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useParams } from "react-router";
import styles from "./City.module.css";
import { useEffect } from "react";
import { useCities } from "../contexts/CitiesContext";
import Spinner, { SpinnerCities } from "./Spinner";
import Button from "./utils/Button";
import { useNavigate } from "react-router";

const formatDate = (date) =>
	new Intl.DateTimeFormat("en", {
		day: "numeric",
		month: "long",
		year: "numeric",
		weekday: "long",
	}).format(new Date(date));

function City() {
	const { id } = useParams();
	const { getCity, currCity, isLoading } = useCities();
	const navigate = useNavigate();

	useEffect(() => {
		getCity(id);
	}, [id]);

	const { cityName, emoji, date, notes, position } = currCity;

	if (isLoading) return <SpinnerCities />;
	return (
		<div className={styles.city}>
			<div className={styles.row}>
				<h6>City name</h6>
				<h3>
					<span>{emoji}</span> {cityName}
				</h3>
			</div>

			<div className={styles.row}>
				<h6>You went to {cityName} on</h6>
				<p>{formatDate(date || null)}</p>
			</div>

			{notes && (
				<div className={styles.row}>
					<h6>Your notes</h6>
					<p>{notes}</p>
				</div>
			)}

			<div className={styles.row}>
				<h6>Learn more</h6>
				<a
					href={`https://en.wikipedia.org/wiki/${cityName}`}
					target="_blank"
					rel="noreferrer">
					Check out {cityName} on Wikipedia &rarr;
				</a>
			</div>

			<Button
				classes="btn-error btn-lg"
				handler={(e) => {
					e.preventDefault();
					navigate(`/app/cities/?lat=${position.lat}&lng=${position.lng}`);
				}}>
				Back
			</Button>
		</div>
	);
}

export default City;
