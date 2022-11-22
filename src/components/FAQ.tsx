import React, { useRef, useState } from "react";

const FAQ = () => {
	const faqsList = [
		{
			q: "How many GEN 2 apes is there total?",
			a: "3000 if everyone mutates.",
		},
		{
			q: "What will happen to the GEN 1 apes that are not mutated?",
			a: "They'll have the opportunity to take a different path in the future.",
		},
		{
			q: "When is the token release set to be?",
			a: "Details still being finalized, likely Q1 2023.",
		},
		{
			q: "Are there benefits to holding all 3 apes?",
			a: "We're working on developing features for those who hold all 3.",
		},
	];

	return (
		<section
			id="faqs"
			className="-mb-[1px] bg-white py-16 px-8 leading-relaxed lg:px-8"
		>
			<div className="space-y-3 text-center">
				<h2 className="text-3xl font-semibold text-gray-800 lg:text-5xl">
					Frequently Asked Questions
				</h2>
				<p className="mx-auto max-w-lg text-xl text-gray-600">
					Answered all frequently asked questions, Still confused?
					feel free to ask in our{" "}
					<a
						className="text-indigo-600 underline"
						href="https://discord.com/invite/utilityape"
						target="_blank"
						rel="noopener noreferrer"
					>
						Discord Server
					</a>
					.
				</p>
			</div>
			<div className="mx-auto mt-14 max-w-2xl">
				{faqsList.map((item, idx) => (
					<FaqsCard key={idx} item={item} />
				))}
			</div>
		</section>
	);
};

const FaqsCard = (props: { item: { q: string; a: string } }) => {
	const answerElRef = useRef<HTMLDivElement>(null);
	const [state, setState] = useState(false);
	const [answerH, setAnswerH] = useState("0px");
	const { item } = props;

	const handleOpenAnswer = () => {
		const answerElH = answerElRef.current?.offsetHeight || 0;
		setState(!state);
		setAnswerH(`${answerElH + 20}px`);
	};

	return (
		<div
			className="mt-5 space-y-3 overflow-hidden border-b"
			onClick={handleOpenAnswer}
		>
			<h3 className="flex cursor-pointer items-center justify-between py-4 text-lg font-medium text-gray-800">
				{item.q}
				{state ? (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="ml-2 h-5 w-5 text-gray-500"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M20 12H4"
						/>
					</svg>
				) : (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="ml-2 h-5 w-5 text-gray-500"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M12 4v16m8-8H4"
						/>
					</svg>
				)}
			</h3>
			<div
				className="duration-300"
				style={state ? { height: answerH } : { height: "0px" }}
			>
				<div ref={answerElRef}>
					<p className="text-gray-500">{item.a}</p>
				</div>
			</div>
		</div>
	);
};

export default FAQ;
