const Benefits = () => {
	const list = [
		{
			heading: "UA Token",
			content:
				"We'll be developing a token for our holders where holders will earn tokens every 24 hours.",
		},
		{
			heading: "Loot boxes",
			content:
				"You'll be able to claim a loot box and have a random chance at containing CUS, SOL, USDC, and other tokens.",
		},
		{
			heading: "Automated trading",
			content:
				"We're producing an auto trader capable of trading automagically for you with an estimate of 80% + win rate on trades, allowing holders to profit on trading. Holders earn 20% of the fees we collect.",
		},
		{
			heading: "Coin Flip",
			content:
				"A coin flip program more powerful than most competitors in the space, holders earn 20% of the fees we collect.",
		},
	];

	return (
		<section id="benefits" className="-mt-[1px] bg-white py-8">
			<div className="container mx-auto flex flex-wrap px-8 py-4">
				<p className="my-2 w-full text-center text-xl font-bold leading-tight text-gray-800">
					Utility Ape Holders
				</p>
				<h2 className="my-2 w-full text-center text-5xl font-bold leading-tight text-gray-800">
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
