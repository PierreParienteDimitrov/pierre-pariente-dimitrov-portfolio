import React from 'react';
import './_tabcontent.scss';

const TabContent = ({ children, title, content, code }) => {
	return (
		<div className='sm:w-full md:w-full grid grid-layout -z-10'>
			<div className='col-start-1 col-end-4 h-full row-start-1 row-end-5 md:col-start-1 md:col-end-5 md:row-start-1 md:row-end-4 rounded-3xl md:py-10'>
				<div className='w-full h-full bg-gray-100 flex-none rounded-3xl relative'>
					<div className='w-full h-full flex-none rounded-2xl shadow-lg bg-gradient-to-r from-primary to-secondary transform -rotate-2 z-10 absolute top-0 left-0'></div>
				</div>
			</div>

			<div className='bg-gray-100 col-start-2 col-end-3 row-start-2 row-end-3 md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-4 z-10 rounded-3xl'>
				{code}
			</div>

			<div className='col-start-2 col-end-3 row-start-3 row-end-4 md:col-start-1 md:col-end-3 md:row-start-2 md:row-end-4 z-10 rounded-3xl flex items-center md:relative'>
				<div className='bg-white w-full h-full md:h-4/6 rounded-3xl md:absolute md:left-10 shadow-lg flex'>
					<div className='bg-gray-200 w-3/12 h-full flex items-center justify-center rounded-l-3xl'>
						{title}
					</div>
					<div className='bg-white w-9/12 h-full flex items-center justify-center rounded-r-3xl'>
						{content}
					</div>
				</div>
			</div>
		</div>
	);
};

export default TabContent;
