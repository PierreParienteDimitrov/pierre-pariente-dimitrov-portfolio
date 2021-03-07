import React from 'react';
import Grid from '../../Layout/Grid/Grid';
import Card from '../Card/Card';
import { ProjectsItems } from './ProjectsItems';

const Projects = () => {
	return (
		<Grid>
			{ProjectsItems.map((project, index) => (
				<Card
					key={index}
					title={project.title}
					description={project.description}
					url={project.url}
					alt={project.alt}
					src={project.src}
				/>
			))}
		</Grid>
	);
};

export default Projects;
