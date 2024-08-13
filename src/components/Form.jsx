// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { useContext, useState } from "react";
import styles from "./Form.module.css";
import { useNavigate } from "react-router";
import Button from "./utils/Button";
import { AppContext } from "../pages/AppLayout/AppLayout";
import { useCities } from "../contexts/CitiesContext";

export function convertToEmoji(countryCode) {
	const codePoints = countryCode
		.toUpperCase()
		.split("")
		.map((char) => 127397 + char.charCodeAt());
	return String.fromCodePoint(...codePoints);
}

function Form() {
	const [cityName, setCityName] = useState("");
	const [notes, setNotes] = useState("");
	const [date, setDate] = useState(new Date());
	const { currCity } = useCities();
	const { setIsAnimating, setIsOpenToast, isOpenToast } =
		useContext(AppContext);

	const navigate = useNavigate();

	function handleAdd(e) {
		e.preventDefault();
		setIsAnimating(true);
		setIsOpenToast(true);
	}

	function handleBack(e) {
		e.preventDefault();
		if (currCity.lat && currCity.lng) {
			const currLat = currCity.position.lat;
			const currLng = currCity.position.lng;
			navigate(`/app/cities/?lat=${currLat}&lng=${currLng}`);
		} else navigate(-1);
	}

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
				{/* <span className={styles.flag}>{emoji}</span> */}
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
				<Button
					classes="btn-primary text-[#ECECEC] btn-wide btn-lg"
					handler={(e) => handleAdd(e)}
					dis={isOpenToast ? true : false}>
					Add
				</Button>
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
