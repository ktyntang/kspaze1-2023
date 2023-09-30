import Gallery from "./gallery";

export const Portfolio = (props) => {
	let imageUrls = [
		"https://firebasestorage.googleapis.com/v0/b/kspaze1-gc.appspot.com/o/pageProjects%2FpageProjects64.webp?alt=media&token=935aefc0-7177-4bc3-9afd-968f2335168a",
		"https://firebasestorage.googleapis.com/v0/b/kspaze1-gc.appspot.com/o/pageProjects%2FpageProjects65.webp?alt=media&token=c397514b-25d3-44ac-9c03-9305bf0fa1ba",
		"https://firebasestorage.googleapis.com/v0/b/kspaze1-gc.appspot.com/o/pageProjects%2FpageProjects66.webp?alt=media&token=613e43eb-ed9d-4535-83f4-25689e339382",
		"https://firebasestorage.googleapis.com/v0/b/kspaze1-gc.appspot.com/o/pageProjects%2FpageProjects67.webp?alt=media&token=d204a2e5-6d2f-45ac-a003-86fac593150d",
		"https://firebasestorage.googleapis.com/v0/b/kspaze1-gc.appspot.com/o/pageProjects%2FpageProjects68.webp?alt=media&token=ebecb8b9-0fc2-422c-8f6f-6bcfdca182ae",
		"https://firebasestorage.googleapis.com/v0/b/kspaze1-gc.appspot.com/o/pageProjects%2FpageProjects69.webp?alt=media&token=64ff506a-c126-48ac-946b-a234f44c7a0b",
		"https://firebasestorage.googleapis.com/v0/b/kspaze1-gc.appspot.com/o/pageProjects%2FpageProjects70.webp?alt=media&token=fccb2e41-7e2f-4083-8e3a-5d9d7ff9aadd",
		"https://firebasestorage.googleapis.com/v0/b/kspaze1-gc.appspot.com/o/pageProjects%2FpageProjects71.webp?alt=media&token=a60ae7aa-427c-451d-b440-ef093cce7c01",
		"https://firebasestorage.googleapis.com/v0/b/kspaze1-gc.appspot.com/o/pageProjects%2FpageProjects72.webp?alt=media&token=a8bc10ef-7541-4958-9e29-a546cdf22f08",
	];

	const imageData = props?.data ? props.data.sort((a, b) => a.image - b.image) : null;

	return (
		<div id='portfolio'>
			<div className='container'>
				<div className='section-title'>
					<h2>1/1 Arts</h2>
				</div>
				<div className='row'>{imageData && <Gallery images={imageUrls.reverse()} data={imageData} />}</div>
			</div>
		</div>
	);
};
