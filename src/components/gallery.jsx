import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Image, Shimmer } from "react-shimmer";
import "./gallery.css";

export default function Gallery({ images }) {
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
								key={`${image.src.split("token=")[1]}`}
								onClick={() => (image?.link ? window.open(image.link, "_blank") : null)}
							>
								<div className='hover-bg'>
									<div className='hover-text'>
										<h4>{image?.caption ?? "Artwork by Kspaze1"}</h4>
									</div>
								</div>
								<Image
									src={image.src}
									alt={`${image?.caption}`}
									fallback={<Shimmer width={350} height={400} />}
								/>
							</div>
						);
					})}
				</Masonry>
			</ResponsiveMasonry>
		</div>
		// </div>
	);
}
