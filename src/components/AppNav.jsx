import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";
import { useCities } from "../contexts/CitiesContext";
function AppNav() {
	const { currCity } = useCities();

	function cityUrl() {
		if (currCity.position) {
			const currLat = currCity.position.lat;
			const currLng = currCity.position.lng;
			return `cities/?lat=${currLat}&lng=${currLng}`;
		} else {
			return "cities";
		}
	}
	return (
		<div className={styles.nav}>
			<ul>
				<li>
					<NavLink to={cityUrl()}>Cities</NavLink>
				</li>
				<li>
					<NavLink to="countries">Countries</NavLink>
				</li>
			</ul>
		</div>
	);
}

export default AppNav;
