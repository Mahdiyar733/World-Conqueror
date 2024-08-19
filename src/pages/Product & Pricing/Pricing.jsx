// Uses the same styles as Product
import PageNav from "../../components/PageNav";
import styles from "./ProductPricing.module.css";

export default function Pricing() {
	return (
		<main className={`${styles.pricing} h-dvh w-screen flex flex-col`}>
			<PageNav />
			<section className="h-screen flex flex-col items-center py-8 px-3 gap-7">
				<h2 className="text-center text-5xl font-bold tracking-tight mt-4">
					Pricing our services 👩🏼‍💻
				</h2>
				<div className="w-full  bg-opacity-15 flex flex-col items-center gap-3">
					<div className="w-full bg-white rounded-lg flex flex-row items-center min-h-72 flex-1 overflow-hidden gap-3 p-2">
						<div className="flex-1 h-full flex flex-col px-3 py-5">
							<h3 className="text-left text-black text-2xl text-nowrap tracking-tight font-bold">
								Standard Plan
							</h3>
							<ul className="text-gray-700 text-base h-full flex justify-evenly flex-col">
								<li>- Unlimited trip logging</li>
								<li>- map with unlimited locations</li>
								<li>- Customizable travel itineraries</li>
								<li>- Access to exclusive travel guides</li>
							</ul>
						</div>
						<div className="bg-gray-50 rounded-lg text-black justify-evenly flex-1 h-full flex flex-col items-center py-5 px-6 border border-solid border-gray-300">
							<span className="text-xl font-semibold text-gray-400">
								Pay once, own it 2 month
							</span>
							<span className="text-2xl font-normal">
								<strong className="text-5xl font-bold">$367</strong> USD
							</span>
							<button className="btn btn-primary btn-wide btn-md text-white">
								buy now
							</button>
							<span className="text-gray-700 text-xs text-center">
								Invoices and receipts available
							</span>
						</div>
					</div>
					<div className="w-full bg-white rounded-lg flex flex-row items-center min-h-72 flex-1 overflow-hidden">
						s
					</div>
					<div className="w-full bg-white rounded-lg flex flex-row items-center min-h-72 flex-1 overflow-hidden">
						s
					</div>
				</div>
			</section>
		</main>
	);
}
