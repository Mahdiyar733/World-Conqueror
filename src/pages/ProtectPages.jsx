/* eslint-disable react/prop-types */
import { useNavigate } from "react-router";
import { useAuth } from "../contexts/authContext";
import { useEffect } from "react";
function ProtectPages({ children }) {
	const { isAuth } = useAuth();
	const nav = useNavigate();

	useEffect(() => {
		if (!isAuth) nav("/");
	}, [isAuth, nav]);
	return <>{isAuth ? children : null};</>;
}

export default ProtectPages;
