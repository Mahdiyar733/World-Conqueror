import { createContext, useState } from "react";
import Toast from "../../components/utils/Toast";
import HeartSvg from "../../svg/HeartSvg";
import styles from "./Sec.module.css";
import Form from "../../components/utils/ModalBox";
import Button from "../../components/utils/Button";

export const Sec3Context = createContext("");

function Sec3() {
	const [isOpenToast, setIsOpenToast] = useState(false);
	const [isAnimating, setIsAnimating] = useState(false);
	const [modalIsOpen, setModalIsOpen] = useState(false);

	function handleModal() {
		setModalIsOpen((modalIsOpen) => !modalIsOpen);
	}

	return (
		<Sec3Context.Provider
			value={{
				isOpenToast,
				setIsOpenToast,
				isAnimating,
				setIsAnimating,
				modalIsOpen,
				setModalIsOpen,
			}}>
			<main
				className={`${styles.homepage} lg:px-28 sm:px-24 md:px-36 px-10 lg:pt-0 py-20 h-auto lg:h-dvh scroll-mt-3`}
				id="feedback">
				<section style={{ height: "100%" }}>
					<div
						className="hero rounded-lg overflow-hidden "
						style={{
							backgroundImage:
								"url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
						}}>
						<div className="hero-overlay bg-opacity-40 backdrop-saturate-150 backdrop-opacity-10"></div>
						<div className="hero-content text-[#ECECEC] text-center py-10 min-h-[500px]">
							<div className="max-w-lg lg:max-w-7xl md:max-w-2xl">
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
								{!modalIsOpen && (
									<a href="#feedback">
										<Button
											handler={handleModal}
											classes="btn-wide btn-lg btn-warning">
											Send feedback
										</Button>
									</a>
								)}
								{modalIsOpen && <Form />}
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

				<Toast
					isOpenToast={isOpenToast}
					isAnimating={isAnimating}
					setIsAnimating={setIsAnimating}
					setIsOpenToast={setIsOpenToast}>
					<span>Thank you for your feedback.</span>
					<HeartSvg />
				</Toast>
			</main>
		</Sec3Context.Provider>
	);
}

export default Sec3;
