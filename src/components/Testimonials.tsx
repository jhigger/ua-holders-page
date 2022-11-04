const Testimonials = () => {
	const list = [
		{
			heading: "Bulls Head",
			content:
				"It's so so well explained and the preset tools are just insanely well made.",
		},
		{
			heading: "Ninja Wallet",
			content:
				"...Im' impressed! I've been in web3 for over a year, and this is the best tool I've ever seen!",
		},
		{
			heading: "Busy Boars",
			content:
				"In my eyes, you have the most advanced engagement tool currently on the market.",
		},
	];

	return (
		<section id="benefits" className="-mt-[1px] bg-transparent px-4 py-8">
			<div className="container mx-auto flex flex-wrap">
				<p className="my-2 w-full text-center text-xl font-semibold leading-tight text-white">
					Stats and Client Feedback
				</p>
				<h2 className="my-2 w-full text-center text-3xl font-bold leading-tight text-white lg:text-5xl">
					Testimonials
				</h2>
				<p className="my-2 w-full text-center text-2xl leading-tight text-white">
					What they told us
				</p>
				<div className="mb-16 w-full">
					<div className="gradient mx-auto my-0 h-1 w-64 rounded-t py-0 opacity-25"></div>
				</div>
				<ul className="flex w-full flex-wrap justify-center">
					{list.map((item, idx) => {
						return (
							<li
								key={idx}
								className="flex w-full max-w-xs flex-shrink flex-grow flex-col p-6 text-center md:w-1/2 xl:w-1/4"
							>
								<div className="h-full flex-1 rounded-3xl bg-gray-50 p-8 shadow transition duration-300 ease-in-out hover:bg-white hover:shadow-2xl">
									<p className="mb-auto text-start text-gray-600">
										<span className="text-lg font-bold text-indigo-500">
											“
										</span>
										{item.content}
										<span className="text-lg font-bold text-indigo-500">
											”
										</span>
									</p>
									<div className="mt-4 flex items-center justify-end text-sm font-bold text-indigo-500">
										~ {item.heading}
									</div>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
};

export default Testimonials;
