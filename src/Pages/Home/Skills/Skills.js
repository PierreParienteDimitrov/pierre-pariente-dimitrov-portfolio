import React from 'react';
import Container from '../../../Layout/Container/Container';
import ContainerFluid from '../../../Layout/ContainerFluid/ContainerFluid';
import { SkillsItems } from './SkillsItems';
import Uxvideo from '../../../assets/uxvideo.mp4';
import './_skills.scss';

const Skills = () => {
	return (
		<ContainerFluid>
			<video
				autoPlay
				muted
				loop
				style={{
					position: 'absolute',
					zIndex: '-1',
					opacity: '0.2',
					width: '100%',
					height: '100%',
				}}
			>
				<source src={Uxvideo} type='video/mp4' />
			</video>
			<Container style={{ position: 'relative', top: '0', left: '0' }}>
				<h2 className='mt-20 mb-20 md:mb-20'>
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
