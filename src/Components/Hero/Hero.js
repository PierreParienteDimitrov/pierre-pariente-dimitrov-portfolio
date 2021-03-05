import React from 'react';
import TypewriterEffect from './TypewriterEffect';
import './_hero.scss';

const Hero = () => {
	return (
		<header className='container'>
			<div className='title'>
				<p>
					Hi, my name is <span className='title-bold'>Pierre Pariente Dimitrov</span>
					. I am a:
				</p>
				<br />
				<br />
				<TypewriterEffect />
			</div>
			<div className='aboutMe'>
				<p>This is the left description paragraph</p>
			</div>
		</header>
	);
};

export default Hero;
