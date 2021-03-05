import React from 'react';
import './_btn-primary.scss';

const BtnPrimary = () => {
	return (
		<button
			type='button'
			className='flex flex-col items-center btn-primary uppercase'
		>
			<div className='opacity-60'>Contact Me</div>
			<hr className='w-full h-0.5 underline' />
		</button>
	);
};

export default BtnPrimary;
