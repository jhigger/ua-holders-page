import { useEffect, useRef } from "react";

const BackToTop = () => {
	const ref = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		window.onscroll = function () {
			scrollFunction();
		};

		function scrollFunction() {
			if (
				document.body.scrollTop > 500 ||
				document.documentElement.scrollTop > 500
			) {
				ref.current?.classList.remove("hidden");
				ref.current?.classList.add("block");
			} else {
				ref.current?.classList.remove("block");
				ref.current?.classList.add("hidden");
			}
		}
		// When the user clicks on the button, scroll to the top of the document
		ref.current?.addEventListener("click", backToTop);

		function backToTop() {
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
		}
	}, []);

	return (
		<button
			ref={ref}
			type="button"
			data-mdb-ripple="true"
			data-mdb-ripple-color="light"
			className="gradient fixed bottom-5 right-5 hidden rounded-full p-3 text-xs font-medium uppercase leading-tight text-white shadow-md ring-2 ring-white transition duration-75 ease-in-out hover:text-black focus:ring-black active:scale-75"
			id="btn-back-to-top"
		>
			<svg
				aria-hidden="true"
				focusable="false"
				data-prefix="fas"
				className="h-4 w-4"
				role="img"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 448 512"
			>
				<path
					fill="currentColor"
					d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
				></path>
			</svg>
		</button>
	);
};

export default BackToTop;
