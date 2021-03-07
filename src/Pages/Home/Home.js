import React from 'react';
import Hero from '../../Components/Hero/Hero';
import Projects from '../../Components/Projects/Projects';
import Skills from '../../Components/Skills/Skills';
import Container from '../../Layout/Container/Container';

import './_home.scss';

const Home = () => {
	return (
		<>
			<Container>
				<Hero />
				<Projects />
			</Container>
		</>
	);
};

export default Home;
