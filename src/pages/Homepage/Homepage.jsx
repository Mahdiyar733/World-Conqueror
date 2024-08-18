import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
import PageNav from "../../components/PageNav";
import Footer from "../../components/Footer";
import Sec2 from "./Sec2";
import Sec3 from "./Sec3";
import { Fragment, useContext } from "react";
import { DropdownContext } from "../../components/DropdownBtn";

export default function Homepage() {
	const { isOpen } = useContext(DropdownContext);

	return (
		<Fragment>
			<>
				<main className={`${styles.homepage} h-screen`}>
					<PageNav />
					{!isOpen && (
						<section className=" animate-fade">
							<h1>
								You travel the world.
								<br />
								GlobeTrotter keeps track of your adventures.
							</h1>
							<h2>
								A world map that tracks your footsteps into every city you can
								think of. Never forget your wonderful experiences, and show your
								friends how you have wandered the world.
							</h2>
							<Link
								to="/login"
								className="cta btn btn-lg btn-primary">
								Start Tracking Now
							</Link>
						</section>
					)}
				</main>
				{!isOpen && (
					<>
						<Sec2 />
						<Sec3 />
						<div className="bg-[url('/src/pages/Homepage/footerPic.jpg')] h-auto bg-cover bg-top">
							<Footer />
						</div>
					</>
				)}
			</>
		</Fragment>
	);
}
