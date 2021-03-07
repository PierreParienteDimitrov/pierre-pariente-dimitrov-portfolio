import React from 'react';
import Container from '../../../Layout/Container/Container';
import ContainerFluid from '../../../Layout/ContainerFluid/ContainerFluid';
import { SkillsItems } from './SkillsItems';
import './_skills.scss';

const Skills = () => {
	return (
		<ContainerFluid>
			<Container>
				<h2 className='mb-20 md:mb-28'>
					My <br /> Skills.
				</h2>

				<div className='grid grid-cols-1 lg:grid-cols-3 gap-x-2 gap-y-10'>
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
				</div>
			</Container>
		</ContainerFluid>
	);
};

export default Skills;
