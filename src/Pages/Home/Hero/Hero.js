import React from 'react';
import { Link } from 'react-router-dom';
import BtnPrimary from '../../../Components/BtnPrimary/BtnPrimary';
import Container from '../../../Layout/Container/Container';
import ContainerFluid from '../../../Layout/ContainerFluid/ContainerFluid';
import TypewriterEffect from './TypewriterEffect';
import Uxvideo from '../../../assets/uxvideo.mp4';
import './_hero.scss';

const Hero = () => {
	return (
		<ContainerFluid>
			<video
				autoPlay
				muted
				loop
				style={{
					position: 'absolute',
					bottom: '0rem',
					zIndex: '-1',
					opacity: '0.07',
					width: '100vw',
					height: '100%',
				}}
			>
				<source src={Uxvideo} type='video/mp4' />
			</video>
			<Container style={{ position: 'relative', top: '0', left: '0' }}>
				<header className='flex flex-wrap w-full items-stretch'>
					<div className='w-full h-full mb-16 md:w-2/3'>
						<p>
							Hi, my name is <strong>Pierre Pariente Dimitrov</strong>. I am a:
						</p>
						<br />
						<TypewriterEffect />
					</div>

					<div className='sm:w-full md:w-1/3 md:border-l-2 border-color md:pl-8 md:self-center'>
						<p>I build meaningful digital experiences.</p>
						<Link to='/contact'>
							<BtnPrimary text={'contact me'} />
						</Link>
					</div>
				</header>
			</Container>
		</ContainerFluid>
	);
};

export default Hero;
