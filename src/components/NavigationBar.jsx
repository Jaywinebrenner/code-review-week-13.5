import React from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { Switch, Route, Link } from 'react-router-dom';

function NavigationBar(){

  return (
    <div className="navbarDiv">

      <style jsx>{`
          .navbarDiv{
            background-color: black;
          }

          .navbar-brand {
            font-size: 30px;
            margin-left: 80px;
          }

          .dropdown-toggle {
            margin-left: 70px;
          }
          .nav-link {
            margin-right: 50px;
          }
          .navbar {
            font-weight: bold;
            height: 60px;
            background-color: rgba(0, 0, 0, 0);
            box-shadow: 1px 1px 3px #000000;
          }
          .postJob {
            margin-top: 8px;
          }

          .signInBox{
            margin-top: 10px;
            margin-bottom: 10px;
            margin-left: 20px;
            margin-right: 0;
            height: 30px;
            border-radius: 7%;
            padding: 5px;
            padding-bottom: 30px;
            background-color: rgba(0, 0, 0, .3);
          }

          .kensKegsText{
            background-color: black;
          }

          .signInBox{
            color: gray;

          }

          .signInBox:hover{
            color: #e88b3a;
          }
          .whole-navbar{
            background-color: black;
          }

          .kens-kegs-navbar-text{
            color: #e88b3a;
            font-weight: bold;
            font-family: 'Modak', cursive;
          }

          @import url('https://fonts.googleapis.com/css?family=Modak&display=swap');

          `}</style>


        Link to="/kegs"

        <Navbar className='whole-navbar' fixed="top" collapseOnSelect expand="lg" variant="dark">


          <h1 className='kens-kegs-navbar-text'>Ken's Kegs</h1>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Link className='signInBox' style={{ textDecoration: 'none' }} to="/kegs">Peruse Ken's Kegs</Link>
            </Nav>
            <Nav>
              <Link className='signInBox' style={{ textDecoration: 'none' }} to="/signin">Sign In</Link>
              <Link className='signInBox' style={{ textDecoration: 'none' }} to="/">Home</Link>
              <Link className='signInBox' style={{ textDecoration: 'none' }} to="/newkegform">Employee Tools</Link>
              <Link className='signInBox' style={{ textDecoration: 'none' }} to="/about">About Ken</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

      </div>
    );
  }

  export default NavigationBar;
