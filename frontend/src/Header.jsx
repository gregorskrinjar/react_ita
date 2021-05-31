import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { useHistory  } from 'react-router-dom';



  
    
function Header(props) {
  const [active, setActive] = useState("signout");
  let history = useHistory();

  function logout() {
    localStorage.removeItem("token");
    localStorage.clear();
    history.push('/');
  };
  
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="warning" variant="dark">
        <Navbar.Brand href="/home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Features</Nav.Link>
            <Nav.Link href="/login">Pricing</Nav.Link>
          </Nav>
          <Nav>
          {active === "signin" && <NavLink to="/">Prijava</NavLink>}
          {active === "signout" && <Link onClick={logout}>Odjava</Link>}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
