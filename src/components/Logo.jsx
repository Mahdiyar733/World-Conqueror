import { Link } from "react-router-dom";
import LogoSvg from "../svg/LogoSvg";
function Logo() {
	return (
		<Link
			to="/"
			className="flex flex-row items-center justify-center gap-7">
			<LogoSvg />
			<label className="font-semibold text-4xl sm:text-7xl md:text-5xl cursor-pointer">
				GlobeTrotter
			</label>
		</Link>
	);
}

export default Logo;
