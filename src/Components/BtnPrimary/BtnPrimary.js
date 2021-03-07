import React from 'react';
import './_btn-primary.scss';

const BtnPrimary = ({ text }) => {
	return (
		<button
			type='button'
			className='flex flex-col items-center sm:mt-4 md:mt-8 btn-primary uppercase'
		>
			<div className='opacity-60'>{text}</div>
			<hr className='w-full h-0.5 underline' />
		</button>
	);
};

export default BtnPrimary;
