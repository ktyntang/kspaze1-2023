import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { Portfolio } from "./components/portfolio";
import { Socials } from "./components/socials";
import { getDataJson, getSortedUrls } from "./utils/firebase";

export const scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true,
});

const App = () => {
	const [landingPageData, setLandingPageData] = useState({});
	const [portfolioImages, setPortfolioImages] = useState([]);
	const [portfolioImgData, setPortfolioImgData] = useState([]);

	useEffect(() => {
		setLandingPageData(JsonData);
	}, []);

	useEffect(() => {
		getSortedUrls("portfolio").then((res) => setPortfolioImages(res));
		// getImgCaptions("portfolio").then((res) => setPortfolioImgData(res));
	}, []);
	console.log(getDataJson());

	return (
		<div>
			<Navigation />
			<Portfolio srcList={portfolioImages} dataList={landingPageData.portfolio} />
			<Socials />
			<footer id='footer'>©2023 Kspaze1. All rights reserved.</footer>
		</div>
	);
};

export default App;
