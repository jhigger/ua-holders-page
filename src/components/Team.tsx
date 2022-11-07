import Image from "next/image";

const Team = () => {
	const list = [
		{
			src: "/assets/images/haunt.gif",
			name: "Haunt",
			desc: "Crypto-native CEO and entrepreneur since 2015 with experience in over 20 successful project launches leading teams of 150+ and managing communities of over 1 million active followers",
		},
		{
			filter: "hue-rotate-[260deg]",
			name: "DD",
			desc: "COO with 15 years of experience in operation and analytics for tier-1 consulting firms, raised over 10m in funds, advisor to multiple successful Web2 and Web3 technology start-ups with successful exits.",
		},
		{
			filter: "hue-rotate-[180deg]",
			name: "Stax",
			desc: "CTO, 10 years experience in development and cyber-security, founder of BotsOnDisplay, lead developer of Utility APE bots.",
		},
		{
			filter: "hue-rotate-[0deg]",
			name: "Nicolo",
			desc: "Head of Design, with over 14 years of experience in the entertainment industry, working on projects for Disney, Sesame Street, Tiesto and Deadmau5.",
		},
		{
			filter: "hue-rotate-[80deg]",
			name: "Tyler",
			desc: "15 years of experience as product owner and project manager in financial software, crypto investment and game-fi products with expertise in managing large, remote delivery teams.",
		},
	];

	return (
		<section id="about" className="bg-black py-16 px-8 text-white">
			<div className="container mx-auto flex flex-col items-center justify-center">
				<h2 className="my-2 w-full text-center text-3xl font-bold leading-tight lg:text-5xl">
					About the UA team
				</h2>
				<div className="mb-16 w-full">
					<div className="gradient mx-auto my-0 h-1 w-64 rounded-t py-0 opacity-25"></div>
				</div>
				<ul className="flex w-full flex-wrap items-center justify-center gap-8">
					{list.map((item, idx) => {
						return (
							<Member
								key={idx}
								src={item.src}
								filter={item.filter}
								name={item.name}
								desc={item.desc}
							/>
						);
					})}
				</ul>
			</div>
		</section>
	);
};

const Member = ({
	src,
	filter,
	name,
	desc,
}: {
	src?: string;
	filter?: string;
	name: string;
	desc: string;
}) => {
	return (
		<li className="flex max-w-[38rem] rounded bg-gray-900 ring-1 ring-gray-800">
			<Image
				src={src || "/assets/images/apes/gen1_common.png"}
				alt="avatar"
				width={200}
				height={200}
				className={`object-cover object-center brightness-75 contrast-[1.05] saturate-150 ${filter}`}
			/>
			<div className="flex flex-col items-center justify-center gap-4 p-4">
				<h3 className="w-full text-center text-2xl font-bold uppercase leading-tight text-white">
					{name}
				</h3>
				<p className="mx-auto w-full text-justify leading-relaxed text-white">
					{desc}
				</p>
			</div>
		</li>
	);
};

export default Team;
