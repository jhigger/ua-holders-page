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
			<div className="container mx-auto grid grid-cols-12 place-items-center border">
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
				{/* -----------------*/}
				<>
					<Cell>Engage to Earn</Cell>
					<div className="col-span-3 grid h-full w-full grid-rows-2">
						<div className="col-span-6 flex h-full w-full items-center justify-center border p-1 text-center lg:p-4">
							100% uncommon / common
						</div>
						<div className="col-span-6 flex h-full w-full items-center justify-center border p-1 text-center lg:p-4">
							110% rare / elite
						</div>
					</div>
					<div className="col-span-3 grid h-full w-full grid-rows-2">
						<div className="col-span-6 flex h-full w-full items-center justify-center border p-1 text-center lg:p-4">
							120% uncommon / common
						</div>
						<div className="col-span-6 flex h-full w-full items-center justify-center border p-1 text-center lg:p-4">
							130% rare / elite
						</div>
					</div>
					<Cell>75%</Cell>
				</>
				<>
					<Cell>Client Discount</Cell>
					<div className="col-span-3 grid h-full w-full grid-rows-2">
						<div className="col-span-6 flex h-full w-full items-center justify-center border p-1 text-center lg:p-4">
							5% common / uncommon
						</div>
						<div className="col-span-6 flex h-full w-full items-center justify-center border p-1 text-center lg:p-4">
							12% rare / elite
						</div>
					</div>
					<div className="col-span-3 grid h-full w-full grid-rows-2">
						<div className="col-span-6 flex h-full w-full items-center justify-center border p-1 text-center lg:p-4">
							10% common / uncommon
						</div>
						<div className="col-span-6 flex h-full w-full items-center justify-center border p-1 text-center lg:p-4">
							20% rare / elite
						</div>
					</div>
					<Cell>N/A</Cell>
				</>
				<>
					<Cell>Airdrop</Cell>
					<Cell>10 day staking required</Cell>
					<Cell>6 day staking required</Cell>
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
		<div className="col-span-3 flex h-full w-full items-center justify-center border p-1 text-center lg:p-4">
			{children}
		</div>
	);
};

export default Table;
