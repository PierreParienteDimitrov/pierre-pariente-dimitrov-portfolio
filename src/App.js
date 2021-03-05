import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './Pages/Home/Home';
// import Contact from './Pages/Contact';

import './App.scss';
import Navigation from './Layout/Navigation/Navigation';
import Footer from './Layout/Footer/Footer';

function App() {
	return (
		<Router>
			<div className='App'>
				<Navigation />
				<Route exact path='/' component={Home} />
				{/* <Route path='/contact' component={Contact} /> */}
				{/* <Footer /> */}
			</div>
		</Router>
	);
}

export default App;
