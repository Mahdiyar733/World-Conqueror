import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
import PageNav from "../../components/PageNav";
import ArrowdownSvg from "../../svg/ArrowdownSvg";

export default function Homepage() {
	return (
		<>
			<main className={styles.homepage}>
				<PageNav />
				<section>
					<h1>
						You travel the world.
						<br />
						GlobeTrotter keeps track of your adventures.
					</h1>
					<h2>
						A world map that tracks your footsteps into every city you can think
						of. Never forget your wonderful experiences, and show your friends
						how you have wandered the world.
					</h2>
					<Link
						to="/app"
						className="cta btn btn-lg btn-primary">
						Start Tracking Now
					</Link>
				</section>
			</main>
			<main
				className={`${styles.homepage} lg:px-16 sm:px-24 md:px-36 px-10`}
				style={{ height: "auto" }}>
				<section>
					<div className="text-7xl mb-9 flex flex-row items-center justify-center">
						<h4>Tooltips</h4>
						<ArrowdownSvg />
					</div>
					<div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:h-[400px]">
						<div className="card backdrop-blur-lg backdrop-brightness-150 flex-1 h-full flex justify-between">
							<figure className="flex-[2]">
								<img
									className=" object-cover h-full w-full"
									src="./src/pages/Homepage/travel.jpg"
									alt="travel"
								/>
							</figure>
							<div className="flex w-full flex-col items-center justify-center p-5 gap-4 h-full flex-1">
								<h3 className="text-4xl font-semibold">
									Where should i travel?
								</h3>
								<p className="text-2xl">
									there is information about where you want to trip !
								</p>
								<button className="btn btn-lg btn-primary hover:bg-[#ECECEC] hover:text-primary">
									Learn more
								</button>
							</div>
						</div>
						<div className="card backdrop-blur-lg backdrop-brightness-150 flex-1 h-full">
							<figure className="flex-[2]">
								<img
									className=" object-cover h-full w-full"
									src="./src/pages/Homepage/packed.jpg"
									alt="packed"
								/>
							</figure>
							<div className="flex w-full flex-col items-center justify-center p-5 gap-4 h-full flex-1">
								<h3 className="text-4xl font-semibold">
									Did i picked everything?
								</h3>
								<p className="text-2xl">
									there is website that help you to check everything to pack.
								</p>
								<button className="btn btn-lg btn-primary hover:bg-[#ECECEC] hover:text-primary">
									Open Flyaway
								</button>
							</div>
						</div>
						<div className="card backdrop-blur-lg backdrop-brightness-150 flex-1 h-full">
							<figure className="flex-[2]">
								<img
									className=" object-cover h-full w-full"
									src="./src/pages/Homepage/ticket.jpg"
									alt="ticket"
								/>
							</figure>
							<div className="flex w-full flex-col items-center justify-center p-5 gap-4 h-full flex-1">
								<h3 className="text-4xl font-semibold">
									How can i get tickets?
								</h3>
								<p className="text-2xl">
									From this website you can book your ticket !
								</p>
								<button className="btn btn-lg btn-primary hover:bg-[#ECECEC] hover:text-primary">
									Book ticket
								</button>
							</div>
						</div>
					</div>
				</section>
			</main>
			<main className={`${styles.homepage} lg:px-16 sm:px-24 md:px-36 px-10`}>
				<section>
					<h1>hi</h1>
				</section>
			</main>
		</>
	);
}
