import { useContext } from "react";
import PageNav from "../../components/PageNav";
import styles from "./ProductPricing.module.css";
import { DropdownContext } from "../../components/DropdownBtn";
import DropdownMenu from "../../components/DropdownMenu";
export default function Product() {
	const { isOpen } = useContext(DropdownContext);

	return (
		<main
			className={`${styles.product} h-dvh bg-red-50 w-screen flex flex-col `}>
			<PageNav />
			{!isOpen ? (
				<section className="h-dvh flex flex-col w-full md:flex-row items-center p-9 py-16 gap-5 md:px-1 lg:gap-16 md:gap-9">
					<img
						src="/img-1.jpg"
						className="flex-[2] object-cover sm:max-h-auto max-h-[300px] rounded-lg sm:flex-1 max-w-[380px] animate-fade"
						alt="person with dog overlooking mountain with sunset"
					/>
					<div className="flex-1 flex flex-col justify-center backdrop-saturate-200 p-2 md:p-0 animate-fade-right">
						<h2 className="text-4xl font-semibold mb-2 sm:text-5xl lg:text-7xl flex flex-row items-center text-nowrap">
							About GlobeTrotter 🌍
						</h2>
						<p className="text-base text-justify sm:text-2xl sm:text-left lg:text-3xl font-normal">
							Embark on your adventures with GlobeTrotter, the innovative app
							designed to enhance your travel experience like never before.
							GlobeTrotter allows you to effortlessly track your journeys and
							visualize your travels on an interactive map. With its
							user-friendly interface, you can log your trips, mark significant
							locations, and revisit cherished memories—all in one place. every
							journey becomes a story waiting to be told. Start GlobeTrotter
							today and take the first step towards transforming the way you
							explore our beautiful planet!
						</p>
					</div>
				</section>
			) : (
				<DropdownMenu />
			)}
		</main>
	);
}
