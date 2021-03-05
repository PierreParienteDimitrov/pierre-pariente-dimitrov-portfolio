import React from 'react';
import { Link } from 'react-router-dom';
import BtnPrimary from '../BtnPrimary/BtnPrimary';
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
			<div className='w-full md:w-1/3 border-l-4 border-color pl-8'>
				<p>I am a product designer and web developer.</p>
				<Link to='/contact'>
					<BtnPrimary />
				</Link>
			</div>
		</header>
	);
};

export default Hero;
