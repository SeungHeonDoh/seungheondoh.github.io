import React from 'react';
import { HashRouter as Router, Redirect, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Thesis from './pages/Thesis';
import Contents from './pages/Contents';

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Route
                exact
                path= "/"
                component={ Home }
            />
            <Route
                path= "/blog"
                component={ Blog }
            />
            <Route 
                path="/speech_to_music"
                component={Contents}
            />
            <Route
                path= "/thesis"
                component={ Thesis }
            />
            <Redirect to="/" />
        </Router>
    );
}

export default App;
