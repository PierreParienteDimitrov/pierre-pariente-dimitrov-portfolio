import React from 'react';

const Grid = ({ children }) => {
	return (
		<div className='grid grid-cols-1 gap-x-2 gap-y-2 lg:grid-cols-3'>
			{children}
		</div>
	);
};

export default Grid;
