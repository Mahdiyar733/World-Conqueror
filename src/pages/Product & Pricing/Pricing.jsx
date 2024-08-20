/* eslint-disable react/prop-types */
// Uses the same styles as Product
import { useContext } from "react";
import PageNav from "../../components/PageNav";
import styles from "./ProductPricing.module.css";
import { DropdownContext } from "../../components/DropdownBtn";
import DropdownMenu from "../../components/DropdownMenu";

const data = [
	{
		name: "Free Tier",
		info: [
			"- Basic trip logging",
			"- Interactive map with up to 5 locations",
			"- Access to community travel tips",
			"- Limited destination suggestions",
		],
		price: "Free",
	},
	{
		name: "Standard Plan",
		info: [
			"- Unlimited trip logging",
			"- map with unlimited locations",
			"- Customizable travel itineraries",
			"- Access to exclusive travel guides",
		],
		price: "$362",
	},
	{
		name: "Premium Plan",
		info: [
			"- All Standard Plan features",
			"- Offline access to maps and itineraries",
			"- Personalized destination",
			"- Priority customer support",
		],
		price: "$599",
	},
];

export default function Pricing() {
	const { isOpen } = useContext(DropdownContext);
	return (
		<main
			className={`${styles.pricing} h-dvh w-screen flex flex-col`}
			style={isOpen ? { height: "100dvh" } : {}}>
			<PageNav />
			{!isOpen ? (
				<section className="h-screen flex flex-col items-center py-8 px-0 gap-7">
					<h2 className="text-center text-5xl font-bold tracking-tight mt-4 backdrop-blur-sm backdrop-brightness-125 rounded-lg overflow-hidden py-4 w-full animate-fade-down max-w-[562px]">
						Pricing our services 👩🏼‍💻
					</h2>
					{data.map((item) => {
						return (
							<PriceBox
								key={item.info}
								name={item.name}
								info={item.info}
								price={item.price}
							/>
						);
					})}
				</section>
			) : (
				<DropdownMenu />
			)}
		</main>
	);
}

function PriceBox({ name, info, price }) {
	return (
		<div className="w-full bg-opacity-15 flex flex-col items-center gap-1 sm:gap-3 max-w-[562px] animate-fade">
			<div className="w-full bg-purple-50 rounded-lg flex flex-row items-center min-h-52 h-auto md:min-h-60 flex-1 overflow-hidden gap-3 p-2">
				<div className="flex-1 h-auto flex flex-col px-3 py-5 sm:px-9 ">
					<h3 className="text-left text-black text-2xl text-nowrap tracking-tight font-bold sm:text-4xl ">
						{name}
					</h3>
					<ul className="text-gray-700 text-base h-full flex justify-evenly flex-col sm:text-xl">
						{info.map((item) => (
							<li key={item}>{item}</li>
						))}
					</ul>
				</div>
				<div className="bg-gray-50 rounded-lg text-black justify-between flex-1 h-full flex flex-col items-center py-3 px-4 border border-solid border-gray-300 md:py-5">
					<span className="text-xl font-semibold text-gray-400 md:text-2xl">
						Pay once, own it 2 month
					</span>
					<span className="text-2xl font-normal md:text-3xl">
						<strong className="text-5xl font-bold">{price}</strong>{" "}
						{price !== "Free" && "USD"}
					</span>
					<button className="btn btn-primary btn-wide btn-md text-white">
						buy now
					</button>
					<span className="text-gray-700 text-xs text-center md:text-base">
						Invoices and receipts available
					</span>
				</div>
			</div>
		</div>
	);
}
