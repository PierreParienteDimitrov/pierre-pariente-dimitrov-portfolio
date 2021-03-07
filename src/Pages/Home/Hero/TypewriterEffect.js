import React from 'react';
import { TypewriterItems } from './TypewriterItems';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';
import './_typewriter.scss';

const TypewriterEffect = () => {
	return (
		<div>
			{TypewriterItems.map((item, index) => {
				console.log(index);
				return (
					<Link key={index} to={item.url} className='typewriter'>
						<Typewriter
							options={{
								changeDeleteSpeed: 60,
								delay: 60,
							}}
							onInit={(typewriter) => {
								typewriter
									.pauseFor(index * 2000)
									.typeString(`${item.title}`)
									.pauseFor((index + 1) * (2000 / (index + 1)))
									.deleteAll()
									.typeString(`${item.skill}`)
									.callFunction((state) => {
										state.elements.cursor.style.display = 'none';
									})
									.start();
							}}
						/>
					</Link>
				);
			})}
		</div>
	);
};

export default TypewriterEffect;
