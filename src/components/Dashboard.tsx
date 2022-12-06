const Dashboard = () => {
	const list = [
		{
			year: "2022",
			quarter: "3rd",
			fundraising: false,
			items: [
				"Launch Website",
				"Publish GEN1 NFT Artwork",
				"Complete Engagement bot beta",
				"NFT Tools beta",
				"Security bot beta",
			],
		},
		{
			year: "2022",
			quarter: "4th",
			fundraising: true,
			items: [
				"GEN1 NFT Mint",
				"GEN2 NFT Artwork",
				"Engagement, Security, and NFT bot/tools enhancements",
				"Discord Raffle System",
				"Client outreach",
				"Promotional pricing for first 150 clients",
			],
		},
		{
			year: "2023",
			quarter: "1st",
			fundraising: false,
			items: [
				"NFT Trading bot with buy/sell rules",
				"Staking within discord",
				"Twitch/YT/TG integration",
				"Whitelist bot",
				"Whitelabel Casino games",
				"Contract deployment",
				"Staking features",
			],
		},
		{
			year: "2023",
			quarter: "2nd",
			fundraising: false,
			items: [
				"Solana Pay integration",
				"NFT sniper tools and NFT trackers",
				"Language translator",
				"Staff 2FA auditing",
				"2FA Channel Access",
				"Message Copy Bot",
				"GUI Dashboard integrating all bot features",
			],
		},
		{
			year: "2023",
			quarter: "3rd",
			fundraising: false,
			items: [
				"Improvements and additions to all existing bots",
				"Client outreach pushing to 1000 clients",
				"NFT portfolio checker",
				"P&L Calc in NFT Tools",
			],
		},
		{
			year: "2023",
			quarter: "4th",
			fundraising: true,
			items: [
				"Update Pitch Deck",
				"Update website",
				"Extend client outreach with more trusted staff Passive income via trading bot for holders",
			],
		},
	];

	return (
		<section id="dashboard" className="bg-black py-16 px-8 text-white">
			<div className="container mx-auto flex flex-col items-center justify-center">
				<h2 className="my-2 w-full text-center text-3xl font-bold leading-tight lg:text-5xl">
					Roadmap
				</h2>
				<p className="my-2 w-full text-center text-2xl leading-tight">
					We are constantly working on improvements and additional
					features. We have a ton planned for the development of UA,
					and we expect continued client growth month over month.
				</p>
				<div className="mb-16 w-full">
					<div className="gradient mx-auto my-0 h-1 w-64 rounded-t py-0 opacity-25"></div>
				</div>
				<h3></h3>
				<ul className="flex w-full flex-wrap items-center justify-center gap-8">
					{list.map((item, idx) => {
						return (
							<Quarter
								key={idx}
								year={item.year}
								quarter={item.quarter}
								fundraising={item.fundraising}
								items={item.items}
							/>
						);
					})}
				</ul>
			</div>
		</section>
	);
};

const Quarter = ({
	year,
	quarter,
	fundraising,
	items,
}: {
	year: string;
	quarter: string;
	fundraising: boolean;
	items: string[];
}) => {
	return (
		<li className="flex min-h-[38rem] w-full max-w-sm overflow-hidden rounded bg-gray-900 p-4 ring-1 ring-gray-800">
			<div className="flex flex-col items-center gap-4 p-4">
				<h3 className="w-full text-center text-2xl font-bold uppercase leading-tight text-white">
					{year}
				</h3>
				<h4 className="w-full text-center text-xl uppercase leading-tight text-white">
					{quarter} Quarter
				</h4>
				<br />
				<ul className="flex w-full flex-col gap-1 text-justify">
					{items.map((item) => {
						return (
							<li key={item}>
								<p className="mb-5 text-base text-white">
									&gt; {item}
								</p>
							</li>
						);
					})}
				</ul>
				{fundraising && (
					<>
						<div className="mt-8 w-full">
							<div className="gradient mx-auto my-0 h-1 w-64 rounded-t py-0 opacity-100"></div>
						</div>
						<p className="mx-auto w-full text-center leading-relaxed text-white">
							Fundraising
						</p>
					</>
				)}
			</div>
		</li>
	);
};

export default Dashboard;
