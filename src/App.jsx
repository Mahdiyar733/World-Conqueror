import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage/Homepage";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import "./index.css";
import AppLayout from "./pages/AppLayout/AppLayout";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import { CitiesProvider } from "./contexts/CitiesContext";

function App() {
	return (
		<CitiesProvider>
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
						element={<AppLayout />}>
						<Route
							index
							element={<Navigate to="cities" />}
						/>
						<Route
							path="cities"
							element={<CityList />}
						/>
						<Route
							path="cities/:id"
							element={<City />}
						/>
						<Route
							path="countries"
							element={<CountryList />}
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
		</CitiesProvider>
	);
}

export default App;
