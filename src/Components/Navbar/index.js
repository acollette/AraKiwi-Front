import React from 'react';
//react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//pages
import Home from './Home';
import Info from './Info';
import Error from './Error';
import Mint from './Mint';

//navbar
import Navbar from './Navbar';


const ReactRouterSetup = () => {
    return(
        <Router>
            <Navbar/>
            <Switch>
                <Route exact path='/'>
                    <Home/>
                </Route>
                <Route path='/info'>
                    <Info/>
                </Route>
                <Route path='/mint'>
                    <Mint/>
                </Route>
                <Route path='*'>
                    <Error/>
                </Route>
            </Switch>
        </Router>
    )
}

export default ReactRouterSetup