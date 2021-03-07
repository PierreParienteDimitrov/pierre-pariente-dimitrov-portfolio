import React from 'react';

const Container = ({ children }) => {
	return (
		<div className='mx-4 md:mx-10 lg:mx-12 xl:mx-40 2xl:mx-64'>{children}</div>
	);
};

export default Container;
