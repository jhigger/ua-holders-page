import { TwitterTimelineEmbed } from "react-twitter-embed";
import { discordLink } from "../links";

const PayToRaid = () => {
	return (
		<section id="raid" className="-mt-[1px] bg-transparent px-4 py-8">
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
							placeholder="Loading..."
							userId={"1559396748677619713"}
						/>
					</div>
					<a href={discordLink} rel="noreferrer">
						<button className="focus:shadow-outline my-8 mx-auto w-full max-w-xl transform rounded-full bg-black py-3 px-6 text-xl font-bold text-white shadow transition duration-75 ease-in-out hover:bg-white hover:text-black active:scale-75 lg:mx-0">
							Buy a Raid
						</button>
					</a>
				</div>
			</div>
		</section>
	);
};

export default PayToRaid;
