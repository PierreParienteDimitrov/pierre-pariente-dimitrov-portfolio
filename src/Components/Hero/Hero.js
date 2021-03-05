import React from 'react';
import TypewriterEffect from './TypewriterEffect';
import './_hero.scss';

const Hero = () => {
	return (
		<header
			className='flex flex-wrap w-full items-center'
			style={{ height: '86vh' }}
		>
			<div className='w-full md:w-2/3'>
				<p>
					Hi, my name is <strong>Pierre Pariente Dimitrov</strong>. I am a:
				</p>
				<br />
				<TypewriterEffect />
			</div>
			<div className='w-full md:w-1/3'>
				<p>This is the left description paragraph</p>
			</div>
		</header>
		// <header className='container'>
		// 	<div className='title'>
		// 		<p>
		// 			Hi, my name is <span className='title-bold'>Pierre Pariente Dimitrov</span>
		// 			. I am a:
		// 		</p>
		// 		<br />
		// 		<br />
		// 		<TypewriterEffect />
		// 	</div>
		// 	<div className='aboutMe'>
		// 		<p>This is the left description paragraph</p>
		// 	</div>
		// </header>
	);
};

export default Hero;
