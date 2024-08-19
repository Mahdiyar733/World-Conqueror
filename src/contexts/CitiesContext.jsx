/* eslint-disable react/prop-types */
import { createContext, useState, useEffect, useContext } from "react";

const BASE_URL = "http://localhost:8000";

const CitiesContext = createContext("");

function CitiesProvider({ children }) {
	const [isLoading, setIsLoading] = useState(true);
	const [cities, setCities] = useState([]);
	const [currCity, setCurrCity] = useState({});
	const [error, setError] = useState("");

	useEffect(() => {
		const controller = new AbortController();
		const signal = controller.signal;
		async function fetchData() {
			try {
				setIsLoading(true);
				const res = await fetch(`${BASE_URL}/cities`, { signal });
				if (!res.ok) throw new Error("Network response was not ok !");
				const data = await res.json();
				setCities(data);
				setIsLoading(false);
			} catch (err) {
				if (err.name === "AbortError") {
					throw new Error("Fetch aborted");
				} else {
					setError(err.message);
				}
			} finally {
				setIsLoading(false);
			}
		}
		fetchData();
		return () => controller.abort();
	}, []);

	function getCity(id) {
		if (currCity.id == id) return;
		const controller = new AbortController();
		const signal = controller.signal;
		async function fetchCity() {
			try {
				setIsLoading(true);
				const res = await fetch(`${BASE_URL}/cities/${id}`, { signal });
				if (!res.ok) throw new Error("Network response was not ok !");
				const data = await res.json();
				console.log(data);

				setCurrCity(data);
				setIsLoading(false);
			} catch (err) {
				if (err.name === "AbortError") {
					throw new Error("Fetch aborted");
				} else {
					setError(err.message);
				}
			} finally {
				setIsLoading(false);
			}
		}
		fetchCity();
		return () => controller.abort();
	}

	async function postCity(newCity) {
		try {
			setIsLoading(true);
			const res = await fetch(`${BASE_URL}/cities`, {
				method: "POST",
				body: JSON.stringify(newCity),
				headers: { "Content-Type": "application/json" },
			});
			if (!res.ok) throw new Error("Network response was not ok !");
			const data = await res.json();
			setCities((cities) => [...cities, data]);
		} catch (err) {
			if (err.name === "AbortError") {
				throw new Error("Fetch aborted");
			} else {
				setError(err.message);
			}
		} finally {
			setIsLoading(false);
		}
	}

	async function deleteCity(id) {
		try {
			setIsLoading(true);
			const res = await fetch(`${BASE_URL}/cities/${id}`, {
				method: "DELETE",
			});
			if (!res.ok) throw new Error("Network response was not ok !");
			setCities((cities) => cities.filter((city) => city.id !== id));
		} catch (err) {
			if (err.name === "AbortError") {
				throw new Error("Fetch aborted");
			} else {
				setError(err.message);
			}
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<CitiesContext.Provider
			value={{
				isLoading,
				cities,
				setCities,
				error,
				getCity,
				postCity,
				currCity,
				setCurrCity,
				deleteCity,
			}}>
			{children}
		</CitiesContext.Provider>
	);
}

function useCities() {
	const cities = useContext(CitiesContext);
	if (cities === undefined)
		throw new Error("This component does not access context of cities!");
	return cities;
}

// eslint-disable-next-line react-refresh/only-export-components
export { CitiesProvider, useCities };
