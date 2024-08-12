import { useNavigate } from "react-router";
import styles from "./Map.module.css";
// import { useSearchParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState } from "react";
import { useCities } from "../contexts/CitiesContext";

function Map() {
	const navigate = useNavigate();
	const { cities } = useCities();
	// const [searchParams, setSearchParams] = useSearchParams();
	const [pos, setPos] = useState([37, 60]);
	console.log(cities);

	// const lat = searchParams.get("lat");
	// const lng = searchParams.get("lng");

	return (
		<div
			className={styles.mapContainer}
			onClick={() => {
				navigate("form");
			}}>
			<MapContainer
				className={styles.map}
				center={pos}
				zoom={13}
				scrollWheelZoom={true}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
				/>
				{cities.map((item) => {
					return (
						<Marker
							key={item.id}
							position={[item.position.lat, item.position.lng]}>
							<Popup>
								{item.emoji} {item.cityName}
							</Popup>
						</Marker>
					);
				})}
			</MapContainer>
		</div>
	);
}

export default Map;
