export const Image = ({ title, src }) => {
	return (
		<div className='portfolio-item'>
			<div className='hover-bg'>
				<div className='hover-text'>
					<h4>{title}</h4>
				</div>
				<img src={src} className='img-responsive' alt={title} />
			</div>
		</div>
	);
};
