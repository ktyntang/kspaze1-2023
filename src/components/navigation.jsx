export const Navigation = (props) => {
	return (
		<nav id='menu' className='navbar navbar-default navbar-fixed-top'>
			<div className='container'>
				<div className='navbar-header'>
					<button
						type='button'
						className='navbar-toggle collapsed'
						data-toggle='collapse'
						data-target='#bs-example-navbar-collapse-1'
					>
						{" "}
						<span className='sr-only'>Toggle navigation</span> <span className='icon-bar'></span>{" "}
						<span className='icon-bar'></span> <span className='icon-bar'></span>{" "}
					</button>
					<a className='navbar-brand page-scroll' href='#page-top'>
						Kspaze1
					</a>
				</div>

				<div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
					<ul className='nav navbar-nav navbar-right'>
						<li className='active'>
							<a href='#portfolio' className='page-scroll '>
								1 / 1 Arts
							</a>
						</li>
						{/* <li>
							<a href='#collections' className='page-scroll'>
								Collections
							</a>
						</li> */}
						<li>
							<a
								href='https://medium.com/@kspaze1/art-of-a-daydreaming-techie-69bb88420b'
								target='_blank'
								rel='noreferrer'
								className='page-scroll'
							>
								About
							</a>
						</li>
						<li>
							<a
								href='https://kspaze1-gc.web.app/'
								target='_blank'
								rel='noreferrer'
								className='page-scroll'
							>
								Past Projects
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
