import React from 'react';
import './_card.scss';

const Card = ({ title, description, url, alt, src }) => {
	return (
		<figure
			className='flex justify-center items-center card'
			style={{
				position: 'relative',
			}}
		>
			<img
				src={src}
				alt=''
				className='w-full h-full img-card'
				style={{ position: 'absolute', top: '0', left: '0' }}
			/>
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
