import { useContext, useEffect, useState } from "react";
import styles from "./Form.module.css";
import { useNavigate } from "react-router";
import Button from "./utils/Button";
import { AppContext } from "../pages/AppLayout/AppLayout";
import { useCities } from "../contexts/CitiesContext";
import { useSearchParams } from "react-router-dom";
import { SpinnerCities } from "./Spinner";

// eslint-disable-next-line react-refresh/only-export-components
export function convertToEmoji(countryCode) {
	const codePoints = countryCode
		.toUpperCase()
		.split("")
		.map((char) => 127397 + char.charCodeAt());
	return String.fromCodePoint(...codePoints);
}
const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

function Form() {
	const { setIsAnimating, setIsOpenToast, isOpenToast } =
		useContext(AppContext);
	const { currCity, postCity, setCurrCity } = useCities();
	const [cityName, setCityName] = useState("");
	const [country, setCountry] = useState("");
	const [notes, setNotes] = useState("");
	const [date, setDate] = useState(new Date());
	// eslint-disable-next-line no-unused-vars
	const [searchParams, setSearchParams] = useSearchParams();
	const mapLat = searchParams.get("lat");
	const mapLng = searchParams.get("lng");
	const [isLoading, setIsLoading] = useState(false);
	const [err, setErr] = useState("");
	const [emoji, setEmoji] = useState("");

	const navigate = useNavigate();

	async function handleAdd(e) {
		e.preventDefault();
		setIsAnimating(true);
		setIsOpenToast(true);
		handleSubmit();
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	}

	function handleBack(e) {
		e.preventDefault();
		if (currCity.lat && currCity.lng) {
			const currLat = currCity.position.lat;
			const currLng = currCity.position.lng;
			navigate(`/app/cities/?lat=${currLat}&lng=${currLng}`);
		} else navigate(-1);
	}

	async function handleSubmit() {
		const newCity = {
			cityName,
			country,
			emoji,
			date,
			notes,
			position: {
				lat: mapLat,
				lng: mapLng,
			},
		};
		setIsLoading(true);
		await postCity(newCity);
		navigate(`/app`);
		setCurrCity({});
	}

	useEffect(() => {
		if (!mapLat && !mapLng) return;

		async function fetchCityInfo() {
			try {
				setIsLoading(true);
				const res = await fetch(
					`${BASE_URL}?latitude=${mapLat}&longitude=${mapLng}`,
				);
				const data = await res.json();
				if (data.countryName == "")
					throw new Error("Please pick somewhere else.");
				else {
					setCityName(data.city || data.locality || "");
					setCountry(data.countryName);
					setEmoji(convertToEmoji(data.countryCode));
					setErr("");
				}
			} catch (e) {
				setErr(e.message);
				console.log(e);
			} finally {
				setIsLoading(false);
			}
		}
		fetchCityInfo();
	}, [mapLat, mapLng]);

	if (isLoading) return <SpinnerCities />;
	if (!mapLat && !mapLng) return <h1>click on the map first</h1>;
	if (err) return <p>{err}</p>;

	return (
		<form className={styles.form}>
			<div className={styles.row}>
				<label htmlFor="cityName">City name</label>
				<input
					id="cityName"
					spellCheck="false"
					className="text-black font-semibold"
					onChange={(e) => setCityName(e.target.value)}
					value={cityName}
				/>
				<span className={styles.flag}>{emoji}</span>
			</div>
			<div className={styles.row}>
				<label htmlFor="date">When did you go to {cityName}?</label>
				<input
					className="text-black"
					id="date"
					spellCheck="false"
					onChange={(e) => setDate(e.target.value)}
					value={date}
				/>
			</div>
			<div className={styles.row}>
				<label htmlFor="notes">Notes about your trip to {cityName}</label>
				<textarea
					id="notes"
					spellCheck="false"
					className="max-h-48 min-h-28 text-black"
					onChange={(e) => setNotes(e.target.value)}
					value={notes}
				/>
			</div>
			<div className={styles.buttons}>
				{cityName && (
					<Button
						classes="btn-primary text-[#ECECEC] btn-wide btn-lg"
						handler={(e) => handleAdd(e)}
						dis={isOpenToast ? true : false}>
						Add
					</Button>
				)}
				<Button
					classes="btn-error text-white btn-lg"
					handler={(e) => handleBack(e)}>
					&larr; Back
				</Button>
			</div>
		</form>
	);
}

export default Form;
