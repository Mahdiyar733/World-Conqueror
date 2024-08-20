/* eslint-disable react/prop-types */
import { Outlet } from "react-router";
import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";
import { useContext } from "react";
import { AppContext } from "../pages/AppLayout/AppLayout";

function Sidebar() {
	const { err } = useContext(AppContext);
	return (
		<div className={`${styles.sidebar} bg-neutral`}>
			<Logo />
			<AppNav />
			{err ? (
				<div
					role="alert"
					className="alert alert-error mb-7">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6 shrink-0 stroke-current"
						fill="none"
						viewBox="0 0 24 24">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
					<span>{err}</span>
				</div>
			) : (
				""
			)}

			<Outlet />
			<footer className={styles.footer}>
				<p className={styles.copyright}>
					&copy; Copyright {new Date().getFullYear()} by Mahdiyar inc.
				</p>
			</footer>
		</div>
	);
}

export default Sidebar;
