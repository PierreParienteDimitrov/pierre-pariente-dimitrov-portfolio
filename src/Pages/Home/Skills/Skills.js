import React, { useState } from 'react';
import Container from '../../../Layout/Container/Container';
import ContainerFluid from '../../../Layout/ContainerFluid/ContainerFluid';
import Test from '../../../Components/Test/Test';
import Test2 from '../../../Components/Test/Test2';
import TabBtn from '../../../Components/TabBtn/TabBtn';

import './_skills.scss';

const types = [
	{ text: 'test', component: <Test /> },
	{ text: 'test2', component: <Test2 /> },
];

const Skills = () => {
	const [active, setActive] = useState(types[0]);
	console.log(active);
	console.log(active.component);

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

				<div>
					{types.map((type, index) => {
						return (
							<TabBtn key={index} click={() => setActive(types[index])}>
								{type.text}
							</TabBtn>
						);
					})}
				</div>

				<div className='w-full h-96 rounded-2xl transform -rotate-1 tab-bg'>
					{active.component}
				</div>
			</Container>
		</ContainerFluid>
	);
};

export default Skills;
