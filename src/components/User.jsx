import { useNavigate } from "react-router";
import { useAuth } from "../contexts/authContext";
import styles from "./User.module.css";

function User() {
	const { logout, user } = useAuth();
	const nav = useNavigate();
	function handleClick() {
		logout();
		nav("/");
	}

	return (
		<div className={`${styles.user} bg-neutral`}>
			<img
				src={user.avatar}
				alt={user.name}
			/>
			<span>Welcome, {user.name}</span>
			<button
				className="btn hover:btn-error"
				onClick={handleClick}>
				Logout
			</button>
		</div>
	);
}

export default User;
