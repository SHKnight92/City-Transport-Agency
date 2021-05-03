import React, { useContext, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/css/bootstrap.min.css";
import {UserContext} from "../../App"
import "./Header.css";

const Header = () => {
  const [newUser, setNewUser] = useState(false);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
<div>
<Navbar className="header-nav" collapseOnSelect expand="lg" variant="dark">
      <Navbar.Brand ><Link to='/'>City Transport Agency</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link> <Link to='/home'>Home</Link></Nav.Link>
          <Nav.Link> <Link to='/destination'>Destination</Link></Nav.Link>
          <Nav.Link> <Link to='/blog'>Blog</Link></Nav.Link>
        </Nav>
        <Nav><Nav.Link><Link to='/login' className="user">{loggedInUser.name  || "Log In"}</Link></Nav.Link></Nav>
      </Navbar.Collapse>
    </Navbar>
</div>
  );
};

export default Header;
