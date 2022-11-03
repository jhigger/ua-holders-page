import { type NextPage } from "next";
import Head from "next/head";
import BackToTop from "../components/BackToTop";
import Banner from "../components/Banner";
import Benefits from "../components/Benefits";
import CTA from "../components/CTA";
import Dashboard from "../components/Dashboard";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Table from "../components/Table";
import Team from "../components/Team";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Utility APE | Holders</title>
				<meta
					name="description"
					content="Community, Utility, and Security for the Solana ecosystem through our advanced Discord bots & web3 integrations."
				/>
				<link rel="icon" href="/assets/images/utilityape.png" />
			</Head>

			<Navbar />
			<main className="gradient font-poppins leading-normal tracking-normal text-white">
				<Hero />
				<Benefits />
				<Table />
				<Banner />
				<Dashboard />
				<Team />
				<FAQ />
				<CTA />
				<BackToTop />
			</main>
			<Footer />
		</>
	);
};

export default Home;
