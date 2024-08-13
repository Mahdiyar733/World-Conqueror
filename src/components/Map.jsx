/* eslint-disable react/prop-types */
import { useNavigate } from "react-router";
import styles from "./Map.module.css";
import { useSearchParams } from "react-router-dom";
import {
	MapContainer,
	TileLayer,
	Marker,
	Popup,
	useMap,
	useMapEvent,
} from "react-leaflet";
import { useEffect, useState } from "react";
import { useCities } from "../contexts/CitiesContext";
import Button from "./utils/Button";

function Map() {
	const { cities, setCurrCity } = useCities();
	const [searchParams, setSearchParams] = useSearchParams();
	const [pos, setPos] = useState([40, 0]);
	const nav = useNavigate();
	const mapLat = searchParams.get("lat");
	const mapLng = searchParams.get("lng");

	useEffect(() => {
		if (mapLat && mapLng) {
			setPos([mapLat, mapLng]);
		}
	}, [mapLat, mapLng]);

	function handleUseLoc(e) {
		e.preventDefault();
		navigator.geolocation.getCurrentPosition(
			(res) => {
				nav(
					`/app/cities/?lat=${res.coords.latitude}&lng=${res.coords.longitude}`,
				);
				setCurrCity({});
				// setSearchParams(
				// 	`lat=${res.coords.latitude}&lng=${res.coords.longitude}`,
				// );
			},
			(err) => console.log(err),
		);
	}

	return (
		<div className={styles.mapContainer}>
			<Button
				handler={handleUseLoc}
				classes="btn-success btn-lg text-white absolute btn-wide lg:top-[80%] right-4 top-4 lg:right-1/3">
				Use your location
			</Button>
			<MapContainer
				className={styles.map}
				center={pos}
				zoom={11}
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
				<CityPosition position={pos} />
				<DetectedClick />
			</MapContainer>
		</div>
	);
}

function CityPosition({ position }) {
	const map = useMap();
	map.setView(position);
	return null;
}

function DetectedClick() {
	const navigate = useNavigate();

	useMapEvent({
		click: (e) => {
			navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
		},
	});
}
export default Map;
