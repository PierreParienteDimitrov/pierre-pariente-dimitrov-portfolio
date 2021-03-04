import React, { useState } from 'react';
import './_navigation.scss';
import { MenuItems } from './MenuItems';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
	const [click, setClick] = useState(true);

	const handleClick = () => {
		console.log(click);
		setClick(!click);
	};

	return (
		<header>
			{/* Button Mobile */}
			<div className='menu-btn'>
				<span
					className={click ? 'menu-btn_burger' : 'menu-btn_burger open'}
					onClick={handleClick}
				></span>
			</div>

			{/* Navbar */}
			<nav className={click ? 'nav' : 'nav open'}>
				<ul className={click ? 'menu-nav' : 'menu-nav open'}>
					{MenuItems.map((item, index) => {
						return (
							<li
								className={click ? 'menu-nav_item' : 'menu-nav_item open'}
								key={index}
							>
								<NavLink to={item.url} className='menu-nav_link' onClick={handleClick}>
									{item.title}
								</NavLink>
							</li>
						);
					})}
				</ul>
			</nav>
		</header>
	);
};

export default Navigation;
