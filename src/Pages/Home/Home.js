import React from 'react';
import Hero from './Hero/Hero';
import Container from '../../Layout/Container/Container';
import ContainerFluid from '../../Layout/ContainerFluid/ContainerFluid';
import Skills from './Skills/Skills';
import BtnPrimary from '../../Components/BtnPrimary/BtnPrimary';
import './_home.scss';
import CardsGrid from './CardsGrid/CardsGrid';

const Home = () => {
	return (
		<>
			<Hero />
			<ContainerFluid>
				<Container>
					<CardsGrid />
				</Container>
			</ContainerFluid>
			<Skills />
		</>
	);
};

export default Home;
