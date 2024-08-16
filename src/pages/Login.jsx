import { useNavigate } from "react-router";
import PageNav from "../components/PageNav";
import { useAuth } from "../contexts/authContext";
import styles from "./Login.module.css";
import { useEffect, useState } from "react";
export default function Login() {
	// PRE-FILL FOR DEV PURPOSES
	const [email, setEmail] = useState("rez@example.com");
	const [password, setPassword] = useState("1234");
	const { login, isAuth, error } = useAuth();
	const nav = useNavigate();

	function handleSub(e) {
		e.preventDefault();
		login(email, password);
	}

	useEffect(() => {
		if (isAuth) nav("/app", { replace: true });
	}, [isAuth, nav]);

	return (
		<main className={styles.login}>
			<PageNav />
			<form
				className={styles.form}
				onSubmit={(e) => handleSub(e)}>
				<div className={styles.row}>
					<label htmlFor="email">Email address</label>
					<input
						type="email"
						id="email"
						className="text-black"
						onChange={(e) => setEmail(e.target.value)}
						value={email}
					/>
				</div>

				<div className={styles.row}>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						className="text-black"
						id="password"
						onChange={(e) => setPassword(e.target.value)}
						value={password}
					/>
				</div>

				<div>
					<button className="btn btn-primary btn-lg">Login</button>
				</div>
				{error ? (
					<div className="alert alert-error text-lg font-normal">{error}</div>
				) : (
					""
				)}
			</form>
		</main>
	);
}
