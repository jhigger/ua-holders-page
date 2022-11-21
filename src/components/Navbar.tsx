import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
	const [state, setState] = useState(false);
	const links = [
		{ href: "#benefits", text: "Benefits" },
		{ href: "#table", text: "Table" },
		{ href: "#dashboard", text: "Dashboard" },
		{ href: "#about", text: "About" },
		{ href: "#collections", text: "Collections" },
		{ href: "#testimonials", text: "Testimonials" },
		{ href: "#raid", text: "Raid" },
		{ href: "#faqs", text: "FAQs" },
	];

	useEffect(() => {
		let scrollpos = window.scrollY;
		const header = document.getElementById("header");
		const navcontent = document.getElementById("nav-content");
		const navaction = document.getElementById("navAction");
		const toToggle = document.querySelectorAll(".toggleColour");

		const dark = () => {
			header?.classList.add("bg-black");
			navaction?.classList.remove("bg-white");
			navaction?.classList.add("gradient");
			navaction?.classList.remove("text-gray-800");
			navaction?.classList.add("text-white");
			//Use to switch toggleColour colours
			for (let i = 0; i < toToggle.length; i++) {
				toToggle[i]?.classList.remove("text-gray-800");
				toToggle[i]?.classList.add("text-white");
			}
			header?.classList.add("shadow");
			navcontent?.classList.remove("bg-gray-100");
			navcontent?.classList.add("bg-white");
		};

		const light = () => {
			header?.classList.remove("bg-black");
			navaction?.classList.remove("gradient");
			navaction?.classList.add("bg-white");
			navaction?.classList.remove("text-white");
			navaction?.classList.add("text-white");
			//Use to switch toggleColour colours
			for (let i = 0; i < toToggle.length; i++) {
				toToggle[i]?.classList.remove("text-white");
				toToggle[i]?.classList.add("text-gray-800");
			}

			header?.classList.remove("shadow");
			navcontent?.classList.remove("bg-white");
			navcontent?.classList.add("bg-gray-100");
		};

		scrollpos > 20 || state ? dark() : light();

		const handleScroll = () => {
			/*Apply classes for slide in bar*/
			scrollpos = window.scrollY;

			if (scrollpos > 20 || state) {
				dark();
			} else {
				light();
			}
		};

		document.addEventListener("scroll", handleScroll);

		return () => {
			document.removeEventListener("scroll", handleScroll);
		};
	}, [state]);

	return (
		<nav
			id="header"
			className="fixed top-0 z-50 w-full font-poppins text-white transition duration-300 ease-in-out"
		>
			<div className="container mx-auto mt-0 flex w-full flex-wrap items-center justify-between p-4">
				<Link href="/">
					<div className="toggleColour flex items-center gap-4 text-2xl font-bold text-white no-underline hover:no-underline lg:text-4xl">
						<Image
							priority
							loading="eager"
							src="/assets/images/utilityape.png"
							alt="icon"
							width={32}
							height={32}
						/>
						Utility APE
					</div>
				</Link>
				<div className="block pr-4 lg:hidden">
					<button
						id="nav-toggle"
						className="focus:shadow-outline flex transform items-center p-1 text-white transition duration-300 ease-in-out hover:scale-105 hover:text-gray-900 focus:outline-none"
						onClick={() => setState(!state)}
					>
						{state ? <CloseIcon /> : <MenuIcon />}
					</button>
				</div>
				<div
					className={`z-20 mt-8 w-full flex-grow p-4 lg:mt-0 lg:flex lg:w-auto lg:items-center lg:bg-transparent lg:p-0 ${
						state ? "block" : "hidden"
					}`}
				>
					<ul className="flex-1 flex-wrap items-center justify-center md:flex">
						{links.map((link, idx) => {
							return (
								<li key={idx} className="mr-3">
									<a
										className="toggleColour inline-block py-2 px-4 text-lg font-bold text-white no-underline"
										href={link.href}
									>
										{link.text}
									</a>
								</li>
							);
						})}
					</ul>
					<a
						href="https://discord.gg/hT3hYvdy"
						target="_blank"
						rel="noreferrer"
					>
						<button
							id="navAction"
							className="focus:shadow-outline mx-auto hidden transform rounded-full bg-black py-3 px-6 font-bold text-white shadow transition duration-75 ease-in-out hover:bg-white hover:text-black active:scale-75 lg:mx-0 lg:block"
						>
							Demo
						</button>
					</a>
				</div>
			</div>
			<hr className="my-0 border-b border-gray-100 py-0 opacity-25" />
		</nav>
	);
};

const CloseIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="h-6 w-6"
			viewBox="0 0 20 20"
			fill="currentColor"
		>
			<path
				fillRule="evenodd"
				d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

const MenuIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M4 8h16M4 16h16"
			/>
		</svg>
	);
};

export default Navbar;
