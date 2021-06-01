import React from "react";
import { FaNewspaper } from "react-icons/fa";
import {
Navbar,
Nav,
NavDropdown,

} from "react-bootstrap";

const Headernew = () =>{
return(
  
<Navbar  expand="lg" >
  <Navbar.Brand><h1 className="brand"> NEWS WORLD
  <FaNewspaper/> </h1> </Navbar.Brand>
  
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto  text-center">
      <Nav.Link href="#home"><h4 className="navdesign">Home</h4></Nav.Link>
      <Nav.Link href="#link"><h4 className="navdesign">link</h4></Nav.Link>
      <NavDropdown  title="Contact us"  id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Instagram</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">facebook</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">twitter</NavDropdown.Item>
      </NavDropdown>
    </Nav>


   
  </Navbar.Collapse>
</Navbar>


    
)
}
export default Headernew;
