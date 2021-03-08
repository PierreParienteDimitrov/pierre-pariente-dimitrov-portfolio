import React from 'react';
import './_tabBtn.scss';

const TabBtn = ({ children }) => {
	return <button className='px-4 py-2 tab-btn'>{children}</button>;
};

export default TabBtn;
