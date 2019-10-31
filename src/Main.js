import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Concept from "./Concept";
import About from "./About";
import Prototypes from "./Prototypes";
import Process from "./Process";


class Main extends Component {
  render() {
    return (
    <HashRouter>
        <div>
          <h1>Coral</h1>
          <p>The driver and business ecosystem</p>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/concept">Concept Video</NavLink></li>
            <li><NavLink to="/prototypes">Prototypes</NavLink></li>
            <li><NavLink to="/process">Design Process</NavLink></li>
          </ul>
          <div className="content">
            <Route path="/" component={Home}/>
            <Route path="/concept" component={Concept}/>
            <Route path="/about" component={About}/>
            <Route path="/prototypes" component={Prototypes}/>
            <Route path="/process" component={Process}/>             
             
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;
