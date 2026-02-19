// frontend/src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home'; // Example Home component
import About from './components/About'; // Example About component
import Navbar from './components/Navbar'; // Example Navbar component
import NotFound from './components/NotFound'; // Example NotFound component

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/about' component={About} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;