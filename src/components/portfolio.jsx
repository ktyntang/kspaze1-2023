import Gallery from "./gallery";

export const Portfolio = ({ dataList, srcList }) => {
	const imageData = dataList ? dataList.sort((a, b) => a.image - b.image) : null;
	const imageSrcs = srcList ? srcList : null;

	return (
		<div id='portfolio'>
			<div className='container'>
				<div className='section-title'>
					<h2>1/1 Arts</h2>
				</div>
				<div className='row'>{imageData && <Gallery images={imageSrcs} data={imageData} />}</div>
			</div>
		</div>
	);
};
