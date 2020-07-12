import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './components/Home';
import About from './components/About';
import Skill from './components/Skill';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Error from './components/Error';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route  path="/" component={Home} exact/>
             <Route  path="/about" component={About}/>
             <Route  path="/skill" component={Skill}/>
             <Route  path="/project" component={Projects}/>
             <Route  path="/contact" component={Contact}/>
             <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;