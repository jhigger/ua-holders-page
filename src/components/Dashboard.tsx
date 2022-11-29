import Image from "next/image";

const Dashboard = () => {
	return (
		<section
			id="dashboard"
			className="container mx-auto flex h-full flex-col items-center justify-center"
		>
			<Image
				src="/assets/images/roadmap.png"
				alt="roadmap"
				width={1344}
				height={695}
				quality={100}
			/>
		</section>
	);
};

export default Dashboard;
