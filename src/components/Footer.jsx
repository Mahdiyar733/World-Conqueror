import EmailSvg from "../svg/EmailSvg";
import GithubSvg from "../svg/GithubSvg";
import LogoSvg from "../svg/LogoSvg";
import TelegramSvg from "../svg/TelegramSvg";

function Footer() {
	return (
		<>
			<footer className="backdrop-blur-sm backdrop-brightness-50  w-full flex flex-col-reverse sm:px-16 px-7 py-12 lg:flex-row items-center justify-evenly">
				<div className="w-full flex flex-row items-start gap-4 h-full justify-center">
					<div className="grid grid-cols-1 grid-rows-5 items-center justify-center gap-2 h-full text-[#ECECEC] w-full text-nowrap">
						<h6 className="text-3xl font-bold opacity-70 mb-2">Services</h6>
						<span className="text-2xl font-semibold hover:translate-x-1 transition-all duration-300 cursor-pointer ">
							Map
						</span>
						<span className="text-2xl font-semibold hover:translate-x-1 transition-all duration-300 cursor-pointer ">
							WikiTravel
						</span>
						<span className="text-2xl font-semibold hover:translate-x-1 transition-all duration-300 cursor-pointer ">
							Book ticket
						</span>
						<span className="text-2xl font-semibold hover:translate-x-1 transition-all duration-300 cursor-pointer ">
							Pack checker
						</span>
					</div>
					<div className="grid grid-cols-1 grid-rows-5 items-center justify-center gap-2 h-full text-[#ECECEC] w-full">
						<h6 className="text-3xl font-bold opacity-70 mb-2">Company</h6>
						<span className="text-2xl font-semibold hover:translate-x-1 transition-all duration-300 cursor-pointer">
							Jobs
						</span>
						<span className="text-2xl font-semibold hover:translate-x-1 transition-all duration-300 cursor-pointer">
							Press kit
						</span>
						<span className="text-2xl font-semibold hover:translate-x-1 transition-all duration-300 cursor-pointer">
							About us
						</span>
						<span className="text-2xl font-semibold hover:translate-x-1 transition-all duration-300 cursor-pointer">
							Contact us
						</span>
					</div>
					<div className="grid grid-cols-1 grid-rows-5 items-center justify-center gap-2 h-full text-[#ECECEC] w-full">
						<h6 className="text-3xl font-bold opacity-70 mb-2">Legal</h6>
						<span className="text-2xl font-semibold hover:translate-x-1 transition-all duration-300 cursor-pointer">
							Terms of use
						</span>
						<span className="text-2xl font-semibold hover:translate-x-1 transition-all duration-300 cursor-pointer">
							Privacy policy
						</span>
						<span className="text-2xl font-semibold hover:translate-x-1 transition-all duration-300 cursor-pointer">
							Cookie policy
						</span>
					</div>
				</div>
				<div className="grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 lg:grid-cols-1 lg:grid-rows-2 lg:gap-4 justify-center items-center w-full p-7 mb-7">
					<div className="flex flex-row-reverse gap-3 items-center justify-center">
						<h1 className="text-5xl font-semibold">GlobeTrotter</h1>
						<LogoSvg />
					</div>
					<div className="flex flex-col items-center justify-end gap-5 lg:flex-row lg:justify-center">
						<span className="text-3xl font-normal">Get touch with me :</span>
						<div className="gap-5 flex flex-row">
							<div
								className="tooltip tooltip-bottom"
								data-tip="Telegram">
								<a
									className=" cursor-pointer hover:-translate-y-1 transition-all duration-300"
									href="https://telegram.me/Mahdiyar733">
									<TelegramSvg />
								</a>
							</div>
							<div
								className="tooltip tooltip-bottom"
								data-tip="Mail">
								<a
									href="mailto:imahrez733@example.com"
									className=" cursor-pointer hover:-translate-y-1 transition-all duration-300">
									<EmailSvg />
								</a>
							</div>
							<div
								className="tooltip tooltip-bottom"
								data-tip="Github">
								<a
									className=" cursor-pointer hover:-translate-y-1 transition-all duration-300"
									href="https://github.com/Mahdiyar733">
									<GithubSvg />
								</a>
							</div>
						</div>
					</div>
				</div>
			</footer>
			<div className="w-full backdrop-blur-sm backdrop-brightness-[0.3] p-3 text-xl flex items-center text-[#ECECEC]">
				<p>
					Copyright © {new Date().getFullYear()} - All right reserved by
					<a
						className="cursor-pointer hover:text-primary-content transition-all duration-200 hover:underline font-semibold"
						href="https://github.com/Mahdiyar733">
						{" "}
						Mahdiyar Rez
					</a>
				</p>
			</div>
		</>
	);
}

export default Footer;
