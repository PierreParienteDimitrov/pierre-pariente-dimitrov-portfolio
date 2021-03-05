import React from 'react';
import Card from '../../Components/Card/Card';
import Hero from '../../Components/Hero/Hero';
import './_home.scss';

const Home = () => {
	return (
		<div className='main'>
			<Hero />
			<Card />
		</div>
	);
};

export default Home;
