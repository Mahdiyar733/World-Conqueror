// import ArrowdownSvg from "../../svg/ArrowdownSvg";
import styles from "./Sec.module.css";
import packedImage from "./packed.jpg";
import travelImage from "./travel.jpg";
import ticketImage from "./ticket.jpg";

export default function Sec2() {
	return (
		<main
			className={`${styles.homepage} lg:px-16 sm:px-24 md:px-36 py-6 px-20 h-auto lg:h-dvh`}>
			<section>
				{/* <div className="text-7xl mb-9 flex flex-row items-center justify-center">
					<h4>Tooltips</h4>
					<ArrowdownSvg />
				</div> */}
				<div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:h-[400px]">
					<div className="card backdrop-blur-lg backdrop-brightness-150 flex-1 h-full flex justify-between max-w-[383px]">
						<figure className="flex-[2]">
							<img
								className="object-cover h-full w-full"
								src={travelImage}
								alt="travel"
							/>
						</figure>
						<div className="flex w-full flex-col items-center justify-center p-5 gap-4 h-full flex-1">
							<h3 className="text-4xl font-semibold">Where should i travel?</h3>
							<p className="text-2xl">
								information about where you want to trip !
							</p>
							<a
								href="https://www.infoplease.com/countries"
								target="_blank">
								<button className="btn btn-wide btn-lg btn-primary hover:bg-[#ECECEC] hover:text-primary">
									Learn more
								</button>
							</a>
						</div>
					</div>
					<div className="card backdrop-blur-lg backdrop-brightness-150 flex-1 h-full max-w-[383px]">
						<figure className="flex-[2]">
							<img
								className="object-cover h-full w-full"
								src={packedImage}
								alt="packed"
							/>
						</figure>
						<div className="flex w-full flex-col items-center justify-center p-5 gap-4 h-full flex-1">
							<h3 className="text-4xl font-semibold">
								Did i picked everything?
							</h3>
							<p className="text-2xl">
								website that help you to check everything to pack.
							</p>
							<a
								href="https://fly-away-app1.netlify.app"
								target="_blank">
								<button className="btn btn-wide btn-lg btn-primary hover:bg-[#ECECEC] hover:text-primary">
									Open Flyaway
								</button>
							</a>
						</div>
					</div>
					<div className="card backdrop-blur-lg backdrop-brightness-150 flex-1 h-full max-w-[383px]">
						<figure className="flex-[2]">
							<img
								className=" object-cover h-full w-full"
								src={ticketImage}
								alt="ticket"
							/>
						</figure>
						<div className="flex w-full flex-col items-center justify-center p-5 gap-4 h-full flex-1">
							<h3 className="text-4xl font-semibold">How can i get tickets?</h3>
							<p className="text-2xl">
								From this website you can book your ticket !
							</p>
							<a
								href="https://www.kayak.com/"
								target="_blank">
								<button className="btn btn-wide btn-lg btn-primary hover:bg-[#ECECEC] hover:text-primary">
									Book ticket
								</button>
							</a>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
