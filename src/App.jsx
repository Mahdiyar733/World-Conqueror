import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage/Homepage";
import Login from "./pages/Login/Login";
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
import { AuthProvider } from "./contexts/authContext";
import ProtectPages from "./pages/ProtectPages";
import { DropdownProvider } from "./components/DropdownBtn";

function App() {
	return (
		<AuthProvider>
			<DropdownProvider>
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
								element={
									<ProtectPages>
										<AppLayout />
									</ProtectPages>
								}>
								<Route
									index
									element={<Navigate to={`cities`} />}
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
			</DropdownProvider>
		</AuthProvider>
	);
}

export default App;
