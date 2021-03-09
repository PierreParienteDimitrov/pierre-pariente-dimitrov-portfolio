import React, { useState } from 'react';
import './_tabs.scss';

const Tabs = () => {
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
			<div
				className={isTab1 ? 'tabcontent active' : 'tabcontent'}
				style={isTab1 ? { display: 'block' } : { display: 'none' }}
			>
				<h3>Responsive</h3>
				<p>London is the capital city of England.</p>
			</div>

			<div
				className={isTab2 ? 'tabcontent active' : 'tabcontent'}
				style={isTab2 ? { display: 'block' } : { display: 'none' }}
			>
				<h3>Components</h3>
				<p>Paris is the capital of France.</p>
			</div>

			<div
				className={isTab3 ? 'tabcontent active' : 'tabcontent'}
				style={isTab3 ? { display: 'block' } : { display: 'none' }}
			>
				<h3>Colors</h3>
				<p>Tokyo is the capital of Japan.</p>
			</div>
			<div
				className={isTab4 ? 'tabcontent active' : 'tabcontent'}
				style={isTab4 ? { display: 'block' } : { display: 'none' }}
			>
				<h3>Typography</h3>
				<p>Tokyo is the capital of Japan.</p>
			</div>
		</div>
	);
};

export default Tabs;
