import React from 'react';

const Title = ({ header, title, description }) => {
	return (
		<div className='mb-24'>
			<h5>{header}</h5>
			<h1>{title}</h1>
			<h3 className='w-9/12'>{description} </h3>
		</div>
	);
};

export default Title;
