import React from 'react';

const ContainerFluid = ({ bgColor, children }) => {
	return (
		<div
			className='w-screen h-full pt-36 pb-24 md:pt-24 md:pb-24'
			style={{ background: `${bgColor}` }}
		>
			{children}
		</div>
	);
};

export default ContainerFluid;
