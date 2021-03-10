import React, { useState } from 'react';
import TabContent from '../TabContent/TabContent';
import './_tabs.scss';

const Tabs = () => {
	// handling logic to display relevant tab
	const [isTab1, setIsTab1] = useState(true);
	const [isTab2, setIsTab2] = useState(false);
	const [isTab3, setIsTab3] = useState(false);
	const [isTab4, setIsTab4] = useState(false);

	const handleTab1 = () => {
		setIsTab1(true);
		setIsTab2(false);
		setIsTab3(false);
		setIsTab4(false);
	};
	const handleTab2 = () => {
		setIsTab1(false);
		setIsTab2(true);
		setIsTab3(false);
		setIsTab4(false);
	};
	const handleTab3 = () => {
		setIsTab1(false);
		setIsTab2(false);
		setIsTab3(true);
		setIsTab4(false);
	};
	const handleTab4 = () => {
		setIsTab1(false);
		setIsTab2(false);
		setIsTab3(false);
		setIsTab4(true);
	};

	// Setting the title of the tab area
	const setTitle = () => {
		if (isTab1) {
			return 'Responsive';
		} else if (isTab2) {
			return 'Components';
		} else if (isTab3) {
			return 'colors';
		} else if (isTab4) {
			return 'typography';
		}
	};

	// Setting the content of the tab area
	const setContent = () => {
		if (isTab1) {
			return (
				<div>
					<p>Hello Responsive</p>
				</div>
			);
		} else if (isTab2) {
			return 'Components2';
		} else if (isTab3) {
			return 'colors2';
		} else if (isTab4) {
			return 'typography2';
		}
	};

	// Setting the code of the tab area
	const setCode = () => {
		if (isTab1) {
			return 'Responsive3';
		} else if (isTab2) {
			return 'Components3';
		} else if (isTab3) {
			return 'colors3';
		} else if (isTab4) {
			return 'typography3';
		}
	};

	return (
		<div>
			{/* <!-- Tab links --> */}
			<div className='flex flex-wrap w-full md:w-6/12 overflow-hidden'>
				<button
					className={isTab1 ? 'tablinks tablinks-active' : 'tablinks'}
					onClick={handleTab1}
				>
					Responsive
				</button>
				<button
					className={isTab2 ? 'tablinks tablinks-active' : 'tablinks'}
					onClick={handleTab2}
				>
					Components
				</button>
				<button
					className={isTab3 ? 'tablinks tablinks-active' : 'tablinks'}
					onClick={handleTab3}
				>
					Colors
				</button>
				<button
					className={isTab4 ? 'tablinks tablinks-active' : 'tablinks'}
					onClick={handleTab4}
				>
					Typography
				</button>
			</div>

			{/* <!-- Tab content --> */}

			<TabContent
				title={`${setTitle()}`}
				content={setContent()}
				code={`${setCode()}`}
			>
				<div
					className='tabcontent'
					style={isTab1 ? { display: 'block' } : { display: 'none' }}
				></div>

				<div
					className='tabcontent'
					style={isTab2 ? { display: 'block' } : { display: 'none' }}
				></div>

				<div
					className='tabcontent'
					style={isTab3 ? { display: 'block' } : { display: 'none' }}
				></div>
				<div
					className='tabcontent'
					style={isTab4 ? { display: 'block' } : { display: 'none' }}
				></div>
			</TabContent>
		</div>
	);
};

export default Tabs;
