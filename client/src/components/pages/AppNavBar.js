import React, { useState, Fragment } from 'react';
import { Navbar, NavbarBrand, Container, Nav, Collapse, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import LoginModal from '../auth/LoginModal';
import RegisterModal from '../auth/RegisterModal';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';
import './AppNavBar.css'; 

const AppNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/');
  };
  const guestLinks = (
    <>
    
      <NavItem>
        <RegisterModal />
      </NavItem>
      <NavItem>
        <LoginModal />
      </NavItem>
    </>
  );

  const authLinks = (
    <Fragment>
      <NavItem>
        <Link to="/dashboard">
          <span className="navbar-text mr-3">
            <strong>{user && `Welcome ${user.name} `}</strong>
          </span>
        </Link>
      </NavItem>
      <NavItem>
        <NavLink href="#" onClick={handleLogout}>
          <strong className="navbar-text mr-3">Logout</strong>
        </NavLink>
      </NavItem>
      <NavItem>
        
        <span className="navbar-text mr-3">
          <Link to="/">
            <strong>Home</strong>
          </Link>
        </span>
      </NavItem>
    </Fragment>
  );

  return (
    <div className='Navnav'>

      <Navbar color="light" light expand="md" >
 
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {user && user ? authLinks : guestLinks}
          </Nav>
        </Collapse>
      </Navbar>

    
      
    </div>
  
    
  );
  

};

export default AppNavBar;
