import React from 'react';
import './_card.scss';

const Card = ({ title, description, url, alt, src }) => {
	return (
		<figure
			className='flex px-10 items-center cursor-pointer card'
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
			<div>
				<h2 className='text-white'>{title}</h2>
				<h6 className='text-white'>(Re)discover classical music</h6>
			</div>

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
