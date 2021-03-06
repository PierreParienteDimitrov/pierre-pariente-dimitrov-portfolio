import React from 'react';
import Card from '../../Components/Card/Card';
import Hero from '../../Components/Hero/Hero';
import Skills from '../../Components/Skills/Skills';
import './_home.scss';

const Home = () => {
	return (
		<>
			<div className='main'>
				<Hero />
			</div>
			<div className='w-full h-full py-40 skills-bg-color'>
				<div className='main'>
					<Skills />
				</div>
			</div>

			<div className='main'>
				<Card />
			</div>
		</>
	);
};

export default Home;
