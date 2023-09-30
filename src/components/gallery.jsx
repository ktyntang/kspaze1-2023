import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "./gallery.css";

export default function Gallery({ images, data }) {
	//images is an array of image urls
	//captions is an array of objects with caption and link properties
	return (
		// <div className='scroll-container'>
		<div className='gallery-container'>
			<ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
				<Masonry columnsCount={3} gutter='10px'>
					{images.map((image, i) => {
						return (
							<div
								className='image-container'
								key={`${image.split("token=")[1]}`}
								onClick={() => (data[i]?.link ? window.open(data[i].link, "_blank") : null)}
							>
								<div className='hover-bg'>
									<div className='hover-text'>
										<h4>{data[i]?.caption ?? "Artwork by Kspaze1"}</h4>
									</div>
								</div>
								<img src={image} alt={`${image}`} />
							</div>
						);
					})}
				</Masonry>
			</ResponsiveMasonry>
		</div>
		// </div>
	);
}
