import { Nav, Navbar } from "react-bootstrap";
import Logo from '../../images/wide-silver-logo.png'
import '../Navbar/Navbar.css';
import React from 'react';

const Header = () => {
    
        return (

                <Navbar collapseOnSelect expand="md" bg="" variant="dark" className="p-0 navvy flex-column fixed-top">
                    
                    <div className="nav-bar-top ">
                        <Nav.Link href="#Home" className="nav-brand text-dark font-weight-bold">
                            {/* <img className="logo" src={Logo} alt='logo' /> */}
                            {/* Metropolitain Brokers */}
                            <img src={Logo} alt="Mobile logo"></img>
                        </Nav.Link>
                    </div>
                    <div className="nav-bar-bottom">
                        <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse bg="dark" id="responsive-navbar-nav">
                            <Nav className="m-auto text-right ">
                                <Nav.Link href="#Search" className="text-white nav-links">Search for Property</Nav.Link>
                                <Nav.Link href="#Meet" className="text-white nav-links">Meet the Team</Nav.Link>
                                <Nav.Link href="#Neighbourhoods" className="text-white nav-links">Neighbourhoods</Nav.Link>
                                <Nav.Link href="#About" className="text-white nav-links">About Us</Nav.Link>
                                <Nav.Link href="#Contact" className="text-white nav-links"><a className="contact-link text-white" href="mailto:+ariel.elazarov@icloud.com">Contact Us</a></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                    
                </Navbar>
           
        )
    
    
};

export default Header;