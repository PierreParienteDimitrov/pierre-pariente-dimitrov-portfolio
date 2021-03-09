import React from 'react';
import './_tabBtn.scss';

const TabBtn = ({ bgClassName, click, children }) => {
	const className = `px-4 py-2 tab-btn ${bgClassName}`;

	return (
		<tab className={className} onClick={click}>
			{children}
		</tab>
	);
};

export default TabBtn;
