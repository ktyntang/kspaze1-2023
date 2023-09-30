import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { Portfolio } from "./components/portfolio";
import { Socials } from "./components/socials";

export const scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true,
});

const App = () => {
	const [landingPageData, setLandingPageData] = useState({});
	useEffect(() => {
		setLandingPageData(JsonData);
	}, []);

	return (
		<div>
			<Navigation />
			<Portfolio data={landingPageData.portfolio} />
			<Socials />
			<footer id='footer'>©2023 Kspaze1. All rights reserved.</footer>
		</div>
	);
};

export default App;
