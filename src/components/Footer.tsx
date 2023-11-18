import Image from "next/image";
import {
	demoLink,
	discordLink,
	dropDownItems,
	homeLink,
	links,
	twitterLink,
	whitepaperLink,
} from "../links";

const Footer = () => {
	return (
		<footer className="bg-black font-poppins">
			<div className="container mx-auto px-8">
				<div className="flex w-full flex-col gap-16 py-6 md:flex-row">
					<div className="mb-6 flex flex-1 items-center text-white">
						<Image
							src="/assets/images/logo.png"
							alt="logo"
							width={163}
							height={40}
						/>
					</div>
					<div className="flex-1">
						<p className="uppercase text-gray-300 md:mb-6">Links</p>
						<ul className="list-reset mb-6 grid grid-cols-2">
							<li className="mt-2 mr-2 inline-block md:mr-0 md:block">
								<a
									href={homeLink}
									target="_blank"
									rel="noreferrer"
									className="text-gray-400 no-underline hover:text-indigo-400 hover:underline"
								>
									UA Home
								</a>
							</li>
							<li className="mt-2 mr-2 inline-block md:mr-0 md:block">
								<a
									href={demoLink}
									target="_blank"
									rel="noreferrer"
									className="text-gray-400 no-underline hover:text-indigo-400 hover:underline"
								>
									Demo
								</a>
							</li>
							{links.map((link) => {
								return (
									<li
										key={link.text}
										className="mt-2 mr-2 inline-block md:mr-0 md:block"
									>
										<a
											href={link.href}
											target="_blank"
											rel="noreferrer"
											className="text-gray-400 no-underline hover:text-indigo-400 hover:underline"
										>
											{link.text}
										</a>
									</li>
								);
							})}
							{dropDownItems.map((link) => {
								return (
									<li
										key={link.text}
										className="mt-2 mr-2 inline-block md:mr-0 md:block"
									>
										<a
											href={link.href}
											target="_blank"
											rel="noreferrer"
											className="text-gray-400 no-underline hover:text-indigo-400 hover:underline"
										>
											{link.text}
										</a>
									</li>
								);
							})}
						</ul>
					</div>
					<div className="flex-1">
						<p className="uppercase text-gray-300 md:mb-6">
							Contact
						</p>
						<ul className="list-reset mb-6 flex flex-col">
							<li className="mt-2 mr-2 inline-block md:mr-0 md:block">
								<a
									href={discordLink}
									target="_blank"
									rel="noreferrer"
									className="text-gray-400 no-underline hover:text-indigo-400 hover:underline"
								>
									Discord
								</a>
							</li>
							<li className="mt-2 mr-2 inline-block md:mr-0 md:block">
								<a
									href={twitterLink}
									target="_blank"
									rel="noreferrer"
									className="text-gray-400 no-underline hover:text-indigo-400 hover:underline"
								>
									Twitter
								</a>
							</li>
						</ul>
					</div>
					<div className="flex-1">
						<p className="uppercase text-gray-300 md:mb-6">
							Company
						</p>
						<ul className="list-reset mb-6">
							<li className="mt-2 mr-2 inline-block md:mr-0 md:block">
								<a
									href={whitepaperLink}
									target="_blank"
									rel="noreferrer"
									className="text-gray-400 no-underline hover:text-indigo-400 hover:underline"
								>
									Whitepaper
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
