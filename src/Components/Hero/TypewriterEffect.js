import React from 'react';
import { TypewriterItems } from './TypewriterItems';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';
import './_typewriter.scss';

const TypewriterEffect = () => {
	return (
		<div>
			{TypewriterItems.map((item, index) => {
				return (
					<>
						<Link to={item.url} key={index} className='typewriter'>
							<Typewriter
								onInit={(typewriter) => {
									typewriter
										.pauseFor(index * 1000)
										.typeString(`${item.title}`)
										.pauseFor(2000)
										.deleteAll()
										.changeDeleteSpeed(500)
										.typeString(`${item.skill}`)
										.callFunction((state) => {
											state.elements.cursor.style.display = 'none';
										})
										.start();
								}}
							/>
						</Link>
					</>
				);
			})}
		</div>
	);
};

export default TypewriterEffect;
