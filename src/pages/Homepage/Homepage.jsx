import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
import PageNav from "../../components/PageNav";
import ArrowdownSvg from "../../svg/ArrowdownSvg";
import HeartSvg from "../../svg/HeartSvg";
import { useState } from "react";
import Footer from "../../components/Footer";
export default function Homepage() {
	const [isOpenToast, setIsOpenToast] = useState(false);
	const [isAnimating, setIsAnimating] = useState(false);
	const [inputVal, setInputVal] = useState("");

	function handleInput(e) {
		setInputVal(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		setIsOpenToast(true);
		setIsAnimating(true);
		closeT();
	}

	function closeT() {
		setTimeout(() => {
			setIsAnimating(false);
			setTimeout(() => {
				setIsOpenToast(false);
			}, 800);
		}, 2000);
	}

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
				className={`${styles.homepage} lg:px-16 sm:px-24 md:px-36 px-10 h-auto lg:h-dvh`}>
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
			<main
				className={`${styles.homepage} lg:px-16 sm:px-24 md:px-36 px-10 lg:pt-0 pt-20 h-auto lg:h-dvh pb-32 lg:pb-[unset]`}>
				<section>
					<div
						className="hero h-[400px] rounded-lg overflow-hidden"
						style={{
							backgroundImage:
								"url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
						}}>
						<div className="hero-overlay bg-opacity-40 backdrop-saturate-150"></div>
						<div className="hero-content text-[#ECECEC] text-center ">
							<div className="max-w-md lg:max-w-4xl md:max-w-2xl">
								<h4 className="mb-5 text-7xl font-bold lg:text-8xl md:text-nowrap">
									Get in touch with us !
								</h4>
								<p className="mb-5 text-xl lg:text-2xl">
									We hope this message finds you well! We are reaching out to
									gather your thoughts and opinions. We truly value diverse
									perspectives and believe that constructive criticism can lead
									to meaningful improvements. If you have any feedback,
									suggestions, or critiques, please feel free to tell us.
								</p>
								<form
									action=""
									className="flex flex-col items-center gap-3 text-black">
									<textarea
										placeholder="any feedback"
										spellCheck="false"
										value={inputVal}
										onChange={(e) => handleInput(e)}
										className="textarea textarea-bordered textarea-xs w-full max-w-sm max-h-40 p-2 text-sm font-normal lg:max-w-xl md:max-w-lg lg:max-h-56 lg:text-2xl lg:min-h-32 md:min-h-24 md:text-xl md:p-4"></textarea>
									{!inputVal && (
										<p className="backdrop-blur-md backdrop-brightness-150 text-[#ECECEC] w-full p-2 rounded-lg animate-fade animate-duration-200">
											Please write something . . .
										</p>
									)}
									<button
										type="submit"
										disabled={isAnimating || !inputVal}
										className="btn btn-wide btn-md text-xl btn-primary hover:bg-[#ECECEC] hover:text-primary lg:btn-lg animate-fade"
										onClick={(e) => handleSubmit(e)}>
										Submit
									</button>
								</form>
							</div>
						</div>
					</div>
					<div className="grid grid-cols-1 grid-rows-4 gap-5 md:grid-cols-2 md:grid-rows-2 mt-20">
						<div className="flex items-center justify-center backdrop-blur-md rounded-lg overflow-hidden backdrop-brightness-200 w-full h-32 p-2">
							<div className="flex flex-col justify-evenly p-2 h-full w-full text-black border-l-4 border-solid border-primary ">
								<q className="text-xl font-semibold pl-2">
									Though we travel the world over to find the beautiful, we must
									carry it with us or we find it not.
								</q>
								<p className="pl-2 text-lg opacity-75">– Ralph Waldo Emerson</p>
							</div>
						</div>
						<div className="flex items-center justify-center backdrop-blur-md rounded-lg overflow-hidden backdrop-brightness-200 w-full h-32 p-2">
							<div className="flex flex-col justify-evenly p-2 h-full w-full text-black border-l-4 border-solid border-primary ">
								<q className="text-xl font-semibold pl-2">
									The world is a book, and those who don’t travel read only a
									page.
								</q>
								<p className="pl-2 text-lg opacity-75">– St. Augustine</p>
							</div>
						</div>
						<div className="flex items-center justify-center backdrop-blur-md rounded-lg overflow-hidden backdrop-brightness-200 w-full h-32 p-2">
							<div className="flex flex-col justify-evenly p-2 h-full w-full text-black border-l-4 border-solid border-primary ">
								<q className="text-xl font-semibold pl-2">
									ravel is fatal to prejudice, bigotry, and narrow-mindedness.
								</q>
								<p className="pl-2 text-lg opacity-75">– Mark Twain</p>
							</div>
						</div>
						<div className="flex items-center justify-center backdrop-blur-md rounded-lg overflow-hidden backdrop-brightness-200 w-full h-32 p-2">
							<div className="flex flex-col justify-evenly p-2 h-full w-full text-black border-l-4 border-solid border-primary ">
								<q className="text-xl font-semibold pl-2">
									Of all the books in the world, the best stories are found
									between the pages of a passport.
								</q>
								<p className="pl-2 text-lg opacity-75">– Unknown</p>
							</div>
						</div>
					</div>
				</section>

				{isOpenToast && (
					<div
						className={`toast toast-end min-w-[250px] ${
							isAnimating
								? isOpenToast && "animate-fade-left"
								: "animate-jump-out"
						} animate-duration-300`}>
						<div
							className={`alert alert-success text-2xl p-4 font-normal flex flex-row `}>
							<span>Thank you for your feedback.</span>
							<HeartSvg />
						</div>
					</div>
				)}
			</main>
			<div className="bg-[url('./footerPic.jpg')] h-auto bg-cover bg-top">
				<Footer />
			</div>
		</>
	);
}
