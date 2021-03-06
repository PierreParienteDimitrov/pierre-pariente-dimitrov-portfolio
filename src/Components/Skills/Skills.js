import React from 'react';
import { SkillsItems } from './SkillsItems';
import './_skills.scss';

const Skills = () => {
	return (
		<div className='flex flex-col md:flex-row'>
			{SkillsItems.map((skill, index) => {
				return (
					<div className='flex flex-col'>
						<h4>{skill.number}</h4>
						<h4>{skill.title}</h4>
						<p>{skill.description}</p>
					</div>
				);
			})}
		</div>
	);
};

export default Skills;
