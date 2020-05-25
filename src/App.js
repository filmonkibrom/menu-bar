import React from 'react';
/*yarn add react-router-dom should be installed first*/
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from './pages/home.component';
import About from './pages/about.component';
import Contact from './pages/contact.component';

import './App.css';

function App() {
  return (
    <div >
      
        <Router>
          <ul className="options">
            <li><a href><Link to={'/'} className="option"> Home </Link></a></li>
            <li><a href><Link to={'/about'} className="option">About</Link></a></li>
            <li><a href><Link to={'/contact'} className="option">Contact</Link></a></li>
          </ul>
                 <hr />
          <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} /> 
              <Route path="/contact" component={Contact} />    
          </Switch>
        </Router>
      
    </div>
  );
}

export default App;
 