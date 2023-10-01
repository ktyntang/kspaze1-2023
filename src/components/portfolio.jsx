import Gallery from "./gallery";

export const Portfolio = ({ dataList, srcList }) => {
	const imageSrcs = srcList ? srcList : []; // [{image: 0, url: ""}]
	const imageData = dataList ? dataList.sort((a, b) => a.image - b.image) : []; // [{image: 0, caption: "", link: ""}]

	const images = imageSrcs.map((data) => {
		const image = imageData.find((d) => d.image === data.image);
		return { ...data, ...image };
	});

	return (
		<div id='portfolio'>
			<div className='container'>
				<div className='section-title'>{/* <h2>1/1 Arts</h2> */}</div>
				<div className='row'>{imageData && <Gallery images={images} />}</div>
			</div>
		</div>
	);
};
