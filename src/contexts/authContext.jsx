/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";

const FAKE_USER = {
	name: "Mahdiyar",
	email: "rez@example.com",
	password: "1234",
	avatar: "https://i.pravatar.cc/100?u=zz",
};

const AuthContext = createContext();
const initState = {
	user: FAKE_USER,
	isAuth: false,
	error: "",
};

function reducer(state, action) {
	switch (action.type) {
		case "login":
			return { ...state, user: action.payload, isAuth: true };
		case "logout":
			return { ...state, user: null, isAuth: false };
		case "err":
			return { ...state, error: "Username or Password is wrong !" };
		default:
	}
}

function AuthProvider({ children }) {
	const [{ user, isAuth, error }, dispatch] = useReducer(reducer, initState);

	function login(email, pass) {
		if (email === FAKE_USER.email && pass === FAKE_USER.password) {
			dispatch({ type: "login", payload: FAKE_USER });
		} else {
			dispatch({ type: "err" });
		}
	}

	function logout() {
		dispatch({ type: "logout" });
	}

	return (
		<AuthContext.Provider value={{ login, logout, user, isAuth, error }}>
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
