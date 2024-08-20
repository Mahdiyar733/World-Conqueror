/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";

const FAKE_USER = {
	name: "Jaden",
	email: "rez@example.com",
	password: "1234",
	avatar: "https://i.pravatar.cc/100?u=bb",
};

const AuthContext = createContext();
const initState = {
	user: FAKE_USER,
	isAuth: false,
	error: { target: "", message: "" },
};

function reducer(state, action) {
	switch (action.type) {
		case "user":
			return { ...state };
		case "login":
			return { ...state, user: action.payload, isAuth: true };
		case "logout":
			return { ...state, user: null, isAuth: false };
		case "err":
			return {
				...state,
				error: {
					...state.error,
					message: action.payload.message,
					target: action.payload.target,
				},
			};
		default:
	}
}

function AuthProvider({ children }) {
	const [{ user, isAuth, error }, dispatch] = useReducer(reducer, initState);

	// async function getUser(email, password) {
	// 	try {
	// 		const res = await fetch("https://randomuser.me/api/");
	// 		if (!res.ok) throw new Error("Network response was not ok !");
	// 		const data = await res.json();
	// 		const info = await data.results[0];
	// 		const name = await info.name.first;
	// 		const avatar = await info.picture.medium;
	// 		const user = { name, email, password, avatar };
	// 		dispatch({ type: "login", payload: user });
	// 	} catch (err) {
	// 		dispatch({
	// 			type: "err",
	// 			payload: { message: err.message, target: "user" },
	// 		});
	// 	}
	// }

	function login(email, pass) {
		if (!email.trim()) {
			dispatch({
				type: "err",
				payload: { message: "Email is required", target: "email" },
			});
			return;
		}
		if (!pass.trim()) {
			dispatch({
				type: "err",
				payload: { message: "Password is required", target: "password" },
			});
			return;
		}
		if (email === FAKE_USER.email && pass === FAKE_USER.password) {
			dispatch({ type: "login", payload: FAKE_USER });
			// getUser(email, pass);
		} else {
			dispatch({
				type: "err",
				payload: { message: "Email or Password is wrong !", target: "both" },
			});
		}
	}

	function logout() {
		dispatch({ type: "logout" });
	}

	return (
		<AuthContext.Provider
			value={{ login, logout, user, isAuth, error, dispatch }}>
			{children}
		</AuthContext.Provider>
	);
}

function useAuth() {
	const context = useContext(AuthContext);
	if (context === undefined) throw new Error("not access");
	return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { AuthProvider, useAuth };
