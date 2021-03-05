import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Navigation from './Layout/Navigation/Navigation';
import Home from './Pages/Home/Home';
import Designer from './Pages/Designer/Designer';
import Developer from './Pages/Developer/Developer';
import Entrepreneur from './Pages/Entrepreneur/Entrepreneur';
import './App.scss';

function App() {
	return (
		<Router>
			<div className='App'>
				<Navigation />
				<Route exact path='/' component={Home} />
				<Route path='/designer' component={Designer} />
				<Route path='/developer' component={Developer} />
				<Route path='/entrepreneur' component={Entrepreneur} />\
			</div>
		</Router>
	);
}

export default App;
