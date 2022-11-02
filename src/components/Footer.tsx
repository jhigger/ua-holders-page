/* eslint-disable @next/next/no-img-element */
const Footer = () => {
	return (
		<footer className="bg-black">
			<div className="container mx-auto px-8">
				<div className="flex w-full flex-col py-6 md:flex-row">
					<div className="mb-6 flex-1 text-white">
						<a
							className="text-2xl font-bold text-purple-600 no-underline hover:no-underline lg:text-4xl"
							href="#"
						>
							<img src="/assets/images/logo.png" alt="logo" />
						</a>
					</div>
					<div className="flex-1">
						<p className="uppercase text-gray-300 md:mb-6">Links</p>
						<ul className="list-reset mb-6">
							<li className="mt-2 mr-2 inline-block md:mr-0 md:block">
								<a
									href="https://utilityape.com/"
									target="_blank"
									rel="noreferrer"
									className="text-gray-500 no-underline hover:text-indigo-500 hover:underline"
								>
									UA Home
								</a>
							</li>
							<li className="mt-2 mr-2 inline-block md:mr-0 md:block">
								<a
									href="https://demo.utilityape.com/"
									target="_blank"
									rel="noreferrer"
									className="text-gray-500 no-underline hover:text-indigo-500 hover:underline"
								>
									Demo
								</a>
							</li>
							<li className="mt-2 mr-2 inline-block md:mr-0 md:block">
								<a
									href="https://kairos-ua-landing-page.vercel.app/"
									target="_blank"
									rel="noreferrer"
									className="text-gray-500 no-underline hover:text-indigo-500 hover:underline"
								>
									Client
								</a>
							</li>
						</ul>
					</div>
					<div className="flex-1">
						<p className="uppercase text-gray-300 md:mb-6">
							Contact
						</p>
						<ul className="list-reset mb-6">
							<li className="mt-2 mr-2 inline-block md:mr-0 md:block">
								<a
									href="https://discord.com/invite/utilityape"
									target="_blank"
									rel="noreferrer"
									className="text-gray-500 no-underline hover:text-indigo-500 hover:underline"
								>
									Discord
								</a>
							</li>
							<li className="mt-2 mr-2 inline-block md:mr-0 md:block">
								<a
									href="https://twitter.com/utilityapeNFT"
									target="_blank"
									rel="noreferrer"
									className="text-gray-500 no-underline hover:text-indigo-500 hover:underline"
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
									href="https://utility-ape.gitbook.io/utility-ape-whitepaper/"
									target="_blank"
									rel="noreferrer"
									className="text-gray-500 no-underline hover:text-indigo-500 hover:underline"
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
