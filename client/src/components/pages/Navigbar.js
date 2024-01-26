import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import Booking from './Booking';
import './Navigbar.css'; 

function Navigbar(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
    <Navbar expand="sm" {...args} className="ProfessionalNavbar">
      <NavbarBrand href="/">IceQuest Drive</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink href="/About">ABOUT</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/OurServices">OUR SERVICES</NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              BOOK YOUR CAR NOW
            </DropdownToggle>
            <DropdownMenu right>
              <Booking />
              <DropdownItem href="/AvailableCars">AVAILABLE CARS</DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="Conditions">CONDITIONS</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <NavbarText>LogOut</NavbarText>
      </Collapse>
    </Navbar>
  </div>
  );
}

export default Navigbar;