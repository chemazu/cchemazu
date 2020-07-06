import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./Font.css"
import Home from './View/Home/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import About from './View/About/About';
import Services from './View/Services/Services';


function App() {
  return (
    // <Router basename={process.env.PUBLIC_URL}>
    <Router>
    <div className="App">
      <Switch>
      <Route exact path ="/" component={Home}></Route>
      <Route exact path ="/me" component={About}></Route>
      
      <Route exact path ="/services" component={Services}></Route>
      
      </Switch>

      
    </div>
    </Router>
    
  );
}

export default App;
