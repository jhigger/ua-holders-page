const Dashboard = () => {
	return (
		<section
			id="dashboard"
			className="relative bg-[url('/assets/images/banner.png')] bg-cover bg-center bg-no-repeat md:aspect-[3/1]"
		>
			<div className="h-full bg-black bg-opacity-80 py-16 px-8">
				<div className="container mx-auto flex h-full flex-col items-center justify-center">
					<h2 className="my-2 w-full text-center text-3xl font-bold leading-tight text-white lg:text-5xl">
						Dashboard coming soon for holders
					</h2>
					<p className="my-2 w-full text-center text-xl leading-tight text-white">
						Dashboard will cater to multiple tools provided to our
						holders, including NFT tools, sniper tools, insights,
						and more
					</p>
				</div>
			</div>
		</section>
	);
};

export default Dashboard;
