import React from 'react';
import './_tabBtn.scss';

const TabBtn = ({ click, text }) => {
	return (
		<button className='px-4 py-2 tab-btn' onClick={click} data-element={text}>
			{text}
		</button>
	);
};

export default TabBtn;
