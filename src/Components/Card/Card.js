import React from 'react';
import './_card.scss';

const Card = ({ title, description, url, alt, src }) => {
	return (
		<figure
			className='flex justify-center items-center bg-black card'
			style={{
				backgroundImage: `${src}`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
			}}
		>
			<p>{title}</p>

			{/*<figcaption>
				<a href={url} target='_blank' rel='noreferrer'>
					View More
				</a>
				<p>{title}</p>
				<h3>{description}</h3>
			</figcaption> */}
		</figure>
	);
};

export default Card;
