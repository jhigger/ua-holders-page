import Image from "next/image";
import { useEffect } from "react";

const Navbar = () => {
	const links = [
		{ href: "#benefits", text: "Benefits" },
		{ href: "#table", text: "Table" },
		{ href: "#dashboard", text: "Dashboard" },
		{ href: "#about", text: "About" },
		{ href: "#faqs", text: "FAQs" },
	];

	useEffect(() => {
		let scrollpos = window.scrollY;
		const header = document.getElementById("header");
		const navcontent = document.getElementById("nav-content");
		const navaction = document.getElementById("navAction");
		// const toToggle = document.querySelectorAll(".toggleColour");

		document.addEventListener("scroll", function () {
			/*Apply classes for slide in bar*/
			scrollpos = window.scrollY;

			if (scrollpos > 20) {
				header?.classList.add("bg-black");
				navaction?.classList.remove("bg-white");
				navaction?.classList.add("gradient");
				navaction?.classList.remove("text-gray-800");
				navaction?.classList.add("text-white");
				//Use to switch toggleColour colours
				// for (let i = 0; i < toToggle.length; i++) {
				// 	toToggle[i]?.classList.remove("text-gray-800");
				// 	toToggle[i]?.classList.add("text-white");
				// }
				header?.classList.add("shadow");
				navcontent?.classList.remove("bg-gray-100");
				navcontent?.classList.add("bg-white");
			} else {
				header?.classList.remove("bg-black");
				navaction?.classList.remove("gradient");
				navaction?.classList.add("bg-white");
				navaction?.classList.remove("text-white");
				navaction?.classList.add("text-gray-800");
				//Use to switch toggleColour colours
				// for (let i = 0; i < toToggle.length; i++) {
				// 	toToggle[i]?.classList.remove("text-white");
				// 	toToggle[i]?.classList.add("text-gray-800");
				// }

				header?.classList.remove("shadow");
				navcontent?.classList.remove("bg-white");
				navcontent?.classList.add("bg-gray-100");
			}
		});
	}, []);

	return (
		<nav
			id="header"
			className="fixed top-0 z-50 w-full font-poppins text-white transition duration-300 ease-in-out"
		>
			<div className="container mx-auto mt-0 flex w-full flex-wrap items-center justify-between p-4">
				<a
					className="toggleColour flex items-center gap-4 text-2xl font-bold text-white no-underline hover:no-underline lg:text-4xl"
					href=""
				>
					<Image
						priority
						loading="eager"
						src="/assets/images/utilityape.png"
						alt="icon"
						width={32}
						height={32}
					/>
					Utility Ape
				</a>
				<div className="block pr-4 lg:hidden">
					<button
						id="nav-toggle"
						className="focus:shadow-outline flex transform items-center p-1 text-pink-800 transition duration-300 ease-in-out hover:scale-105 hover:text-gray-900 focus:outline-none"
					>
						<svg
							className="h-6 w-6 fill-current"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title>Menu</title>
							<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
						</svg>
					</button>
				</div>
				<div
					className="z-20 mt-2 hidden w-full flex-grow bg-white p-4 text-black lg:mt-0 lg:flex lg:w-auto lg:items-center lg:bg-transparent lg:p-0"
					id="nav-content"
				>
					<ul className="flex-1 items-center justify-center pr-12 lg:flex">
						{links.map((link, idx) => {
							return (
								<li key={idx} className="mr-3">
									<a
										className="toggleColour inline-block py-2 px-4 font-bold text-white no-underline"
										href={link.href}
									>
										{link.text}
									</a>
								</li>
							);
						})}
					</ul>
					<button
						id="navAction"
						className="focus:shadow-outline mx-auto mt-4 transform rounded-full bg-white py-3 px-6 font-bold text-gray-800 shadow transition duration-300 ease-in-out hover:bg-black hover:text-white focus:outline-none lg:mx-0 lg:mt-0"
					>
						Demo
					</button>
				</div>
			</div>
			<hr className="my-0 border-b border-gray-100 py-0 opacity-25" />
		</nav>
	);
};

export default Navbar;
