import React from 'react';
import Card from '../../../Components/Card/Card';
import { CardsItems } from './CardsItems';

const CardsGrid = () => {
	return (
		<div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-x-2 gap-y-2'>
			{CardsItems.map((project, index) => (
				<Card
					key={index}
					title={project.title}
					description={project.description}
					url={project.url}
					alt={project.alt}
					src={project.src}
				/>
			))}
		</div>
	);
};

export default CardsGrid;
