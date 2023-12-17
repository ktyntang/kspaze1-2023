import { tailChase } from "ldrs";

tailChase.register();

// Default values shown

export const Loader = () => {
	return (
		<div
			id='portfolio'
			style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "25vh 0" }}
		>
			<l-tail-chase size='40' speed='1.5' color='#608dfd'></l-tail-chase>;
		</div>
	);
};
