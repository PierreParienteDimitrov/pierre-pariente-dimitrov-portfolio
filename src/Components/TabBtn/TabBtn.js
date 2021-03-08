import React from 'react';
import './_tabBtn.scss';

const TabBtn = ({ click, children }) => {
	return (
		<button className='px-4 py-2 tab-btn' onClick={click}>
			{children}
		</button>
	);
};

export default TabBtn;
