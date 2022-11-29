import Image from "next/image";

const Collections = () => {
	const list = [
		{
			image: "/assets/images/apes/gen1_common.png",
			name: "Gen 1 Common",
		},
		{
			image: "/assets/images/apes/gen1_uncommon.png",
			name: "Gen 1 Uncommon",
		},
		{
			image: "/assets/images/apes/gen1_rare.png",
			name: "Gen 1 Rare",
		},
		{
			image: "/assets/images/apes/gen1_elite.png",
			name: "Gen 1 Elite",
		},
		{
			image: "/assets/images/apes/gen2_common.png",
			name: "Gen 2 Common",
		},
		{
			image: "/assets/images/apes/gen2_uncommon.png",
			name: "Gen 2 Uncommon",
		},
		{
			image: "/assets/images/apes/gen2_rare.png",
			name: "Gen 2 Rare",
		},
		{
			image: "/assets/images/apes/gen2_elite.png",
			name: "Gen 2 Elite",
		},
	];

	return (
		<section id="collections" className="-mt-[1px] bg-gray-900 px-4 py-8">
			<div className="container mx-auto flex flex-wrap text-white">
				<p className="my-2 w-full text-center text-xl font-semibold leading-tight">
					Utility Ape NFT
				</p>
				<h2 className="my-2 w-full text-center text-3xl font-bold leading-tight lg:text-5xl">
					Collections
				</h2>
				<p className="my-2 w-full text-center text-2xl leading-tight">
					Sample
				</p>
				<div className="mb-16 w-full">
					<div className="gradient mx-auto my-0 h-1 w-64 rounded-t py-0 opacity-25"></div>
				</div>
				<ul className="flex w-full flex-wrap items-center justify-center">
					{list.map((item, idx) => {
						const arr = item.image.split("/");
						const alt = arr[arr.length - 1] || `ape${idx}`;
						return (
							<li
								key={idx}
								className="flex w-full max-w-xs flex-shrink flex-grow flex-col p-6 text-center transition-all duration-300 ease-in-out hover:p-0 md:w-1/2 xl:w-1/4"
							>
								<div className="flex-1 rounded-3xl bg-gray-200 p-4 shadow transition duration-300 ease-in-out hover:bg-gray-50 hover:shadow-2xl">
									<Image
										src={item.image}
										alt={alt}
										width={300}
										height={300}
										className="rounded-xl"
									/>
									<p className="mt-5 text-base text-gray-900">
										{item.name}
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

export default Collections;
