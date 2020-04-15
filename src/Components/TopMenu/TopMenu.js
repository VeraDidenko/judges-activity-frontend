import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
//import {withRouter, Link} from 'react-router-dom';


const TopMenu = props => {

  const { location } = props;
  return (
      <Navbar bg="dark" variant="dark" fixed="top">
         <Navbar.Brand href="/">SCIO</Navbar.Brand>
         <Nav className="mr-auto" activeKey={location.pathname}>
            <Nav.Link href="/">About</Nav.Link>
            <Nav.Link href="/pivot">Pivot</Nav.Link>
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
         </Nav>
      </Navbar>
  );
}

export default TopMenu;
