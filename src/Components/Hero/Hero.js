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
			<div className='sm:w-full md:w-2/3'>
				<p>
					Hi, my name is <strong>Pierre Pariente Dimitrov</strong>. I am a:
				</p>
				<br />
				<TypewriterEffect />
			</div>
			<div className='sm:w-full md:w-1/3 md:border-l-2 border-color md:pl-8 md:self-center'>
				<p>I build meaningful digital experiences.</p>
				<Link to='/contact'>
					<BtnPrimary />
				</Link>
			</div>
		</header>
	);
};

export default Hero;
