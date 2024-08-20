import { useNavigate } from "react-router";
import PageNav from "../../components/PageNav";
import { useAuth } from "../../contexts/authContext";
import { useContext, useEffect, useState } from "react";
import styles from "./Login.module.css";
import { DropdownContext } from "../../components/DropdownBtn";
import DropdownMenu from "../../components/DropdownMenu";
export default function Login() {
	// PRE-FILL FOR DEV PURPOSES
	const [email, setEmail] = useState("rez@example.com");
	const [password, setPassword] = useState("1234");
	const { login, isAuth, error, dispatch } = useAuth();
	const nav = useNavigate();
	const { isOpen } = useContext(DropdownContext);

	function handleSub(e) {
		e.preventDefault();
		console.log(error);
		login(email, password);
	}

	useEffect(() => {
		if (isAuth) nav("/app", { replace: true });
	}, [isAuth, nav]);

	return (
		<main
			className={`${styles.homepage} h-dvh w-screen flex flex-col justify-normal`}>
			<PageNav />
			{!isOpen ? (
				<div
					className={`h-full w-full md:p-20 mt-7 animate-fade-up backdrop-brightness-150 backdrop-saturate-150 rounded-lg p-9`}>
					<div className="h-full w-full rounded-lg flex flex-col bg-cover bg-center">
						<form
							className="h-full rounded-lg backdrop-brightness-75  flex flex-col items-center justify-center gap-3 w-full"
							onSubmit={(e) => handleSub(e)}>
							<h2 className="text-5xl font-bold tracking-tight mb-2 w-4/5 bg-neutral rounded-lg overflow-hidden bg-opacity-70 text-center py-5">
								Login form
							</h2>
							<label
								className={`input input-lg flex items-center gap-2 bg-neutral w-4/5 ${
									error.target === "email" && "input-error"
								}`}
								onFocus={() =>
									dispatch({ type: "err", payload: { target: "" } })
								}
								style={{ outline: "none" }}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 16 16"
									fill="currentColor"
									className="h-10 w-10 opacity-70">
									<path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
									<path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
								</svg>
								<input
									type="email"
									className="grow py-0 focus:bg-neutral-content outline-none focus:text-neutral"
									placeholder="Email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</label>
							<label
								className={`input input-lg flex items-center gap-2 bg-neutral w-4/5 ${
									error.target === "password" && "input-error"
								}`}
								onFocus={() =>
									dispatch({ type: "err", payload: { target: "" } })
								}
								style={{ outline: "none" }}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 16 16"
									fill="currentColor"
									className="h-10 w-10 opacity-70">
									<path
										fillRule="evenodd"
										d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
										clipRule="evenodd"
									/>
								</svg>
								<input
									type="password"
									className="grow py-0 focus:bg-neutral-content outline-none focus:text-neutral"
									placeholder="Password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</label>
							<button className="btn w-4/5 btn-lg font-semibold text-2xl btn-primary hover:bg-white hover:text-primary">
								Login
							</button>
							{error.target && (
								<div className="alert alert-error w-4/5 text-xl font-normal rounded-lg">
									{error.message}
								</div>
							)}
						</form>
					</div>
				</div>
			) : (
				<DropdownMenu />
			)}
		</main>
	);
}
