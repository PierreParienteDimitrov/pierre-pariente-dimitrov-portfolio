import React from 'react';
import './_hero.scss';

const Hero = () => {
	return (
		<header className='container'>
			<article className='title'>
				<p>Hi, my name is Pierre Pariente Dimitrov. I am a:</p>
				<h1>designer</h1>
			</article>
			<article className='aboutMe'>
				<p>This is the left description paragraph</p>
			</article>
		</header>
	);
};

export default Hero;
