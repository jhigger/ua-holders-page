import { TwitterTimelineEmbed } from "react-twitter-embed";

const PayToRaid = () => {
	return (
		<section
			id="pay-to-raid"
			className="-mt-[1px] bg-transparent px-4 py-8"
		>
			<div className="container mx-auto flex flex-wrap">
				<p className="my-2 w-full text-center text-xl font-semibold leading-tight text-white">
					Interested in getting your tweet raided through Utility Ape?
				</p>
				<h2 className="my-2 w-full text-center text-3xl font-bold leading-tight text-white lg:text-5xl">
					Pay To Raid
				</h2>
				<p className="my-2 w-full text-center text-2xl leading-tight text-white">
					See Previous Raids
				</p>
				<div className="mb-16 w-full">
					<div className="gradient mx-auto my-0 h-1 w-64 rounded-t py-0 opacity-25"></div>
				</div>
				<div className="flex w-full flex-col flex-wrap items-center justify-center">
					<div className="w-full text-center md:max-w-xl">
						<TwitterTimelineEmbed
							sourceType="profile"
							screenName="ApeUtilityRaid"
							options={{ height: 500 }}
							// tweetLimit={10}
							placeholder="Loading..."
							userId={"1559396748677619713"}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PayToRaid;
