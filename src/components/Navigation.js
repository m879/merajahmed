import React from 'react';
import { NavLink } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './style.css';
// import ParticlesBg from 'particles-bg';



const mystyle={
    fontSize:'20px',
    fontWeight:"bolder",
    padding:"10px",
    textDecoration:'none',
    color:'black'
 };

const Navigation = () => {
    return (
       <div>
         {/* <ParticlesBg type="color" bg={true}/> */}

        <Navbar  className="py-3" expand="lg" style={{borderBottom:'2px solid red'}}>
            <Navbar.Brand href="#home" style={mystyle}>Meraj Ahmed</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" style={{backgroundColor:'white'}}/>
            <Navbar.Collapse id="basic-navbar-nav" >
              <Nav className="ml-auto px-2" style={{marginRight:'50px'}} >
                <NavLink to="/"        style={mystyle}>Home</NavLink>
                <NavLink to="/about"  style={mystyle}>About</NavLink>
                <NavLink to="/skill"   style={mystyle}>Resume</NavLink>
                <NavLink to="/project" style={mystyle}>Projects</NavLink>
                <NavLink to="/contact" style={mystyle}>Contact</NavLink>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
       </div>
    );
}
 
export default Navigation;