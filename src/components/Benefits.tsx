const Benefits = () => {
	const list = [
		{
			heading: "UA Token",
			content:
				"We're working on the development of our token, 20% of everything we create will go towards burning/creating an LP for the token. Aiming Q1 of 2023.",
		},
		{
			heading: "Automated trading",
			content:
				"We're currently in production for an auto trader, capable of trading automagically for you with an estimate of 80% win rate on trades, allowing holders to profit on trading. 20% of profits made will go to the UA token.",
		},
		{
			heading: "Coin Flip",
			content:
				"A Coin Flip program more powerful than most competitors in the space, both via website AND a unique Discord based coin flip bot. 20% of the fees will go towards the UA token.",
		},
		{
			heading: "Advisory & Launchpad opportunities",
			content:
				"We'll be offering launchpad services to other projects, 20% of what we raise will go back to the UA token. This includes art, community building, marketing help, and development work.",
		},
		{
			heading: "Engage-to-earn bot services",
			content:
				"The shape of UA, also given back to our holders via token, 25% of what we earn will go back to the UA token.",
		},
		{
			heading: "Additional development",
			content:
				"We're working on further development for our holders, to benefit the value of the token and also benefit the Utility usage for our holders.",
		},
		{
			heading: "1:1 Honorary Art",
			content:
				"All Honorary art will be auctioned, 20% of those funds will be added to the UA Token.",
		},
	];

	return (
		<section id="benefits" className="-mt-[1px] bg-white px-4 py-8">
			<div className="container mx-auto flex flex-wrap">
				<p className="my-2 w-full text-center text-xl font-semibold leading-tight text-gray-800">
					Utility Ape Holders
				</p>
				<h2 className="my-2 w-full text-center text-3xl font-bold leading-tight text-gray-800 lg:text-5xl">
					Benefits for <br /> holding a GEN 2?
				</h2>
				<p className="my-2 w-full text-center text-2xl leading-tight text-gray-800">
					Giving back to our holders
				</p>
				<div className="mb-16 w-full">
					<div className="gradient mx-auto my-0 h-1 w-64 rounded-t py-0 opacity-25"></div>
				</div>
				<ul className="flex w-full flex-wrap">
					{list.map((item, idx) => {
						return (
							<li
								key={idx}
								className="flex w-full flex-shrink flex-grow flex-col p-6 text-center md:w-1/2 xl:w-1/4"
							>
								<div className="flex-1 rounded-3xl bg-gray-50 p-8 shadow transition duration-300 ease-in-out hover:bg-white hover:shadow-2xl">
									<h3 className="mb-8 w-full text-xl font-bold text-gray-800">
										{item.heading}
									</h3>
									<p className="mb-5 text-base text-gray-500">
										{item.content}
									</p>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
};

export default Benefits;
