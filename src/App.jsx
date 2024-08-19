import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./index.css";

const HomePage = lazy(() => import("./pages/Homepage/Homepage"));
const Login = lazy(() => import("./pages/Login/Login"));
const Pricing = lazy(() => import("./pages/Product & Pricing/Pricing"));
const Product = lazy(() => import("./pages/Product & Pricing/Product"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

import AppLayout from "./pages/AppLayout/AppLayout";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/authContext";
import ProtectPages from "./pages/ProtectPages";
import { DropdownProvider } from "./components/DropdownBtn";
import SpinnerFullPage from "./components/SpinnerFullPage";

function App() {
	return (
		<AuthProvider>
			<DropdownProvider>
				<CitiesProvider>
					<BrowserRouter>
						<Suspense fallback={<SpinnerFullPage />}>
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
						</Suspense>
					</BrowserRouter>
				</CitiesProvider>
			</DropdownProvider>
		</AuthProvider>
	);
}

export default App;
