import Image from "next/image";

const Banner = () => {
	return (
		<div className="relative aspect-[3/1]">
			<Image src="/assets/images/banner.png" alt="banner" fill />
		</div>
	);
};

export default Banner;
