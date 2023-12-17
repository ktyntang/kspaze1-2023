import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import "./style.css";
import { Portfolio } from "./components/portfolio";
import { Socials } from "./components/socials";
import { getDataJson, getSortedUrls } from "./utils/firebase";
import { Loader } from "./components/loader";

export const scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true,
});

const App = () => {
	const [portfolioImages, setPortfolioImages] = useState([]); // [{image: 0, url: ""}}]
	const [portfolioImgData, setPortfolioImgData] = useState([]); // [{image: 0, caption: "", link: ""}]
	const [isLoaded, setIsLoaded] = useState(false);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		async function getDataAndImgs() {
			try {
				let data = await getDataJson();
				let urls = await getSortedUrls("portfolio");
				setPortfolioImgData(data.portfolio);
				setPortfolioImages(urls);
				setIsLoaded(true);
			} catch (err) {
				setIsError(true);
			}
		}
		getDataAndImgs();
	}, []);

	return (
		<div>
			<Navigation />
			{isError ? (
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						margin: "25vh 0",
						paddingTop: "100px",
					}}
				>
					<h1>Error loading images</h1>
					<p>Please check your connection or try again later.</p>
				</div>
			) : isLoaded ? (
				<Portfolio srcList={portfolioImages} dataList={portfolioImgData} />
			) : (
				<Loader />
			)}
			<Socials />
			<footer id='footer'>©2023 Kspaze1. All rights reserved.</footer>
		</div>
	);
};

export default App;
