import React from 'react';

const Container = ({ children }) => {
	return (
		<div className='px-4 md:px-10 lg:px-12 xl:px-40 2xl:px-64'>{children}</div>
	);
};

export default Container;
