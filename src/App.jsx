import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage/Homepage";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import "./index.css";
import AppLayout from "./pages/AppLayout";
import CityList from "./components/CityList";
import { useEffect, useState } from "react";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";

const BASE_URL = "http://localhost:8000";

function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [cities, setCities] = useState([]);
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

	console.log(error);

	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route
						index
						element={<HomePage />}
					/>
					<Route
						path="login"
						element={<Login />}
					/>
					<Route
						path="pricing"
						element={<Pricing />}
					/>
					<Route
						path="product"
						element={<Product />}
					/>
					<Route
						path="app"
						element={<AppLayout err={error} />}>
						<Route
							index
							element={<Navigate to="cities" />}
						/>
						<Route
							path="cities"
							element={
								<CityList
									cities={cities}
									isLoading={isLoading}
								/>
							}
						/>
						<Route
							path="cities/:id"
							element={<City />}
						/>
						<Route
							path="countries"
							element={<CountryList cities={cities} />}
						/>
						<Route
							path="form"
							element={<Form />}
						/>
					</Route>
					<Route
						path="*"
						element={<PageNotFound />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
