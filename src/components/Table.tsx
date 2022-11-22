const Table = () => {
	return (
		<section
			id="table"
			className="bg-white px-2 py-8 text-gray-800 lg:px-28"
		>
			<h2 className="mb-4 w-full text-center text-3xl font-bold leading-tight text-gray-800 lg:text-5xl">
				Table
			</h2>
			<div className="mb-16 w-full">
				<div className="gradient mx-auto my-0 h-1 w-64 rounded-t py-0 opacity-25"></div>
			</div>
			<div className="container mx-auto grid grid-cols-12 place-items-center border text-xs sm:text-base">
				<>
					<Cell />
					<Cell>
						<span className="text-xl font-bold tracking-widest lg:text-3xl">
							Gen 1
						</span>
					</Cell>
					<Cell>
						<span className="text-xl font-bold tracking-widest lg:text-3xl">
							Gen 2
						</span>
					</Cell>
					<Cell>
						<span className="text-xl font-bold tracking-widest lg:text-3xl">
							Pixel UA
						</span>
					</Cell>
				</>
				<>
					<Cell>Utility Ape Tools</Cell>
					<Cell>&#10004;</Cell>
					<Cell>&#10004;</Cell>
					<Cell>&#10004;</Cell>
				</>
				<>
					<Cell>Anonymous Voting</Cell>
					<Cell>&#10004;</Cell>
					<Cell>&#10004;</Cell>
					<Cell>&#10004;</Cell>
				</>
				<>
					<Cell>Holder Discount Shop</Cell>
					<Cell>&#10004;</Cell>
					<Cell>&#10004;</Cell>
					<Cell>&#10004;</Cell>
				</>
				<>
					<Cell>Hold 5x Passive</Cell>
					<Cell>&#10004;</Cell>
					<Cell>&#10004;</Cell>
					<Cell>&#10004;</Cell>
				</>
				<>
					<Cell>Token Staking</Cell>
					<Cell>&#x2717;</Cell>
					<Cell>&#10004;</Cell>
					<Cell>&#x2717;</Cell>
				</>
				<>
					<Cell>Deflationary</Cell>
					<Cell>&#10004;</Cell>
					<Cell>&#10004;</Cell>
					<Cell>&#10004;</Cell>
				</>
				{/* -----------------*/}
				<>
					<Cell>Engage to Earn</Cell>
					<div className="col-span-3 grid h-full w-full grid-rows-2">
						<div className="col-span-6 flex h-full w-full items-center justify-center border p-0 text-center lg:p-4">
							Common - 100%
						</div>
						<div className="col-span-6 flex h-full w-full items-center justify-center border p-0 text-center lg:p-4">
							Uncommon - 100%
						</div>
						<div className="col-span-6 flex h-full w-full items-center justify-center border p-0 text-center lg:p-4">
							Rare - 110%
						</div>
						<div className="col-span-6 flex h-full w-full items-center justify-center border p-0 text-center lg:p-4">
							Elite - 110%
						</div>
					</div>
					<div className="col-span-3 grid h-full w-full grid-rows-2">
						<div className="col-span-6 flex h-full w-full items-center justify-center border p-0 text-center lg:p-4">
							Common - 120%
						</div>
						<div className="col-span-6 flex h-full w-full items-center justify-center border p-0 text-center lg:p-4">
							Uncommon - 120%
						</div>
						<div className="col-span-6 flex h-full w-full items-center justify-center border p-0 text-center lg:p-4">
							Rare - 130%
						</div>
						<div className="col-span-6 flex h-full w-full items-center justify-center border p-0 text-center lg:p-4">
							Elite - 130%
						</div>
					</div>
					<Cell>75%</Cell>
				</>
				<>
					<Cell>
						<>
							Client Discount
							<br />
							(burn required for discount to apply)
						</>
					</Cell>
					<div className="col-span-3 grid h-full w-full grid-rows-2">
						<div className="col-span-6 flex h-full w-full items-center justify-center border p-0 text-center lg:p-4">
							5% common / uncommon
						</div>
						<div className="col-span-6 flex h-full w-full items-center justify-center border p-0 text-center lg:p-4">
							12% rare / elite
						</div>
					</div>
					<div className="col-span-3 grid h-full w-full grid-rows-2">
						<div className="col-span-6 flex h-full w-full items-center justify-center border p-0 text-center lg:p-4">
							10% common
						</div>
						<div className="col-span-6 flex h-full w-full items-center justify-center border p-0 text-center lg:p-4">
							15% uncommon
						</div>
						<div className="col-span-6 flex h-full w-full items-center justify-center border p-0 text-center lg:p-4">
							25% rare
						</div>
						<div className="col-span-6 flex h-full w-full items-center justify-center border p-0 text-center lg:p-4">
							35% elite
						</div>
					</div>
					<Cell>N/A</Cell>
				</>
				<>
					<Cell>Airdrop</Cell>
					<Cell>N/A</Cell>
					<div className="col-span-3 grid h-full w-full grid-rows-2">
						<div className="col-span-6 flex h-full w-full items-center justify-center border p-0 text-center lg:p-4">
							Common - 12 days
						</div>
						<div className="col-span-6 flex h-full w-full items-center justify-center border p-0 text-center lg:p-4">
							Uncommon - 9 days
						</div>
						<div className="col-span-6 flex h-full w-full items-center justify-center border p-0 text-center lg:p-4">
							Rare - 6 days
						</div>
						<div className="col-span-6 flex h-full w-full items-center justify-center border p-0 text-center lg:p-4">
							Elite - 4 days
						</div>
						<div className="col-span-6 flex h-full w-full items-center justify-center border p-0 text-center lg:p-4">
							Legendary - 3 days
						</div>
					</div>
					<Cell>N/A</Cell>
				</>
				<>
					<Cell>DAO Access</Cell>
					<Cell>Full access</Cell>
					<Cell>Full access</Cell>
					<Cell>No alpha</Cell>
				</>
				<>
					<Cell>Missions Loot Box</Cell>
					<Cell>Coming soon!</Cell>
					<Cell>Coming soon!</Cell>
					<Cell>Coming soon!</Cell>
				</>
			</div>
		</section>
	);
};

const Cell = ({ children }: { children?: JSX.Element | string | null }) => {
	return (
		<div className="col-span-3 flex h-full w-full items-center justify-center border p-0 text-center lg:p-4">
			{children}
		</div>
	);
};

export default Table;
