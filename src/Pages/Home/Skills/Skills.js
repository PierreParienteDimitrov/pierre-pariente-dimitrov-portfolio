import React from 'react';
import Container from '../../../Layout/Container/Container';
import ContainerFluid from '../../../Layout/ContainerFluid/ContainerFluid';
// import Test from '../../../Components/Test/Test';
// import Test2 from '../../../Components/Test/Test2';
// import TabBtn from '../../../Components/TabBtn/TabBtn';

import './_skills.scss';

// const types = [
// 	{ text: 'test', component: <Test /> },
// 	{ text: 'test2', component: <Test2 /> },
// ];

const Skills = () => {
	// const [active, setActive] = useState(types[0]);
	// const [bg, setBg] = useState(true);

	// const handleClick = (index) => {
	// 	setActive(types[index]);
	// };

	return (
		<ContainerFluid>
			<Container>
				<h5>build your projects</h5>
				<h1>From Design to Development</h1>
				<h3 className='w-9/12'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, ut.
				</h3>
				<br />
				<br />

				{/* <div>
					{types.map((type, index) => {
						const indexStr = toString(index);
						const bgClassName = 'bg-' + indexStr;
						return (
							// <TabBtn key={index} click={() => handleClick(index)} bg={bgClassName}>
							// 	{type.text}
							// </TabBtn>
						);
					})}
				</div> */}
				<div className='bg-gray-110 w-full flex-none rounded-3xl height-section absolute'></div>
				<div className='w-full rounded-2xl shadow-lg bg-gradient-to-r from-pink-600 to-purple-600 transform -rotate-1 height-section relative top-0 left-0'></div>

				<div className='w-11/12 h-5/6 grid grid-cols-1 lg:grid-cols-2 gap-x-2 gap-y-2 height-section relative top-0 left-0'>
					<div className='bg-red-50 rounded-xl'></div>
					<div className='bg-blue-100 rounded-xl'></div>
				</div>
			</Container>
		</ContainerFluid>
	);
};

export default Skills;
