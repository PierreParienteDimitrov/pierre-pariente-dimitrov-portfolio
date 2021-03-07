import React, { useState } from 'react';
import TabBtn from '../../../Components/TabBtn/TabBtn';
import Container from '../../../Layout/Container/Container';
import ContainerFluid from '../../../Layout/ContainerFluid/ContainerFluid';
// import { SkillsItems } from './SkillsItems';
import './_skills.scss';

const Skills = () => {
	const [show, setShow] = useState({
		component: true,
		responsive: false,
		colors: false,
		typography: false,
	});

	const handleClick = (e) => {
		const element = e.target.getAttribute('data-element');
		console.log(typeof element);

		console.log(show.element);

		console.log(show);
	};

	// let TabElement = () => {
	// 	if (component) {
	// 		return <h1>component</h1>;
	// 	} else if (responsive) {
	// 		return <h1>Responsive</h1>;
	// 	} else if (colors) {
	// 		return <h1>Colors</h1>;
	// 	} else if (typography) {
	// 		return <h1>Typography</h1>;
	// 	}
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
				<div className='flex space-x-4 w-9/12'>
					<TabBtn text={'component'} click={handleClick} dataElement={'component'} />
					<TabBtn
						text={'responsive'}
						click={handleClick}
						dataElement={'responsive'}
					/>
					<TabBtn text={'colors'} click={handleClick} dataElement={'colors'} />
					<TabBtn
						text={'typography'}
						click={handleClick}
						dataElement={'typography'}
					/>
				</div>
				{/* <TabElement /> */}

				{/* <div className='grid grid-cols-1 lg:grid-cols-3 gap-x-2 gap-y-10'>
					{SkillsItems.map((skill, index) => {
						return (
							<div className='flex flex-col'>
								<h4>{skill.number}</h4>
								<h4>{skill.title}</h4>
								<br />
								<p>{skill.description}</p>
							</div>
						);
					})}
				</div> */}
			</Container>
		</ContainerFluid>
	);
};

export default Skills;
