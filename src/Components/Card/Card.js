import React from 'react';
import { CardsInfo } from './CardsInfo';
import './_card.scss';

const Card = () => {
	return CardsInfo.map((card, index) => {
		return (
			<figure key={index} className='effect-sadie'>
				<img src={card.src} alt={card.alt} />
				<figcaption>
					<a href='https://www.tempso.com' target='_blank' rel='noreferrer'>
						View More
					</a>
					<h2>{card.title}</h2>
					<h3>{card.description}</h3>
				</figcaption>
			</figure>
		);
	});
};

export default Card;
