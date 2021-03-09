import React from 'react';
import Hero from './Hero/Hero';
import Container from '../../Layout/Container/Container';
import ContainerFluid from '../../Layout/ContainerFluid/ContainerFluid';
import Title from '../../Components/Title/Title';
import CardsGrid from './CardsGrid/CardsGrid';
import Tabs from '../../Components/Tabs/Tabs';
import './_home.scss';

const Home = () => {
	return (
		<>
			<Hero />
			<ContainerFluid>
				<Container>
					<CardsGrid />
				</Container>
			</ContainerFluid>
			<ContainerFluid>
				<Container>
					<Title
						header={'build your projects'}
						title={'From Design to Development'}
						description={'Lorem Ipsum'}
					/>
					<Tabs />
				</Container>
			</ContainerFluid>
		</>
	);
};

export default Home;
