import Image from "next/image";

const Team = () => {
	return (
		<section id="about" className="bg-black p-16 text-white">
			<div className="container mx-auto flex flex-col items-center justify-center">
				<h2 className="my-2 w-full text-center text-5xl font-bold leading-tight">
					About the UA team
				</h2>
				<div className="mb-16 w-full">
					<div className="gradient mx-auto my-0 h-1 w-64 rounded-t py-0 opacity-25"></div>
				</div>
				<Image
					src="/assets/images/team.jpg"
					alt="team"
					width={1280}
					height={720}
					className="rounded-xl px-8"
				/>
			</div>
		</section>
	);
};

export default Team;
