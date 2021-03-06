import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components/macro';
import { Link, useLocation } from 'react-router-dom';
import { menuData } from '../../data/MenuData.js'
import { Button } from '../Button.js';
import Bars from '../../images/hamburg.svg';
import MetroLogo from '../../images/Logo.png'
const Nav = styled.nav`
    height: 110px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 0rem;
    z-index: 100;
    position fixed;
    width: 100%;
    
    
`
const NavLink = css`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
    font-family: "Playfair Display SC", serif;
    font-weight: bold;
    font-size: 1.2rem;

    &:hover {
        color: #fff;
        transform: translateY(-5px);
    }
`

const Logo = styled(Link)`
    ${NavLink}
`
const MenuBars = styled.i`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        background-image: url(${Bars});
        background-size: contain;
        height: 40px;
        width: 40px;
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-50%, 75%)
    }
`
const NavMenu = styled.div`
    display:flex;
    align-items: center;
    margin-right: -48px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`
const NavMenuLinks = styled(Link)`
    ${NavLink}
    
`
const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

const Navbar2 = ({ toggle }) => {
    const [navbar, setNavbar] = useState(false);
  const location = useLocation();

  const changeBackground = () => {
    if (window.pageYOffset >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener('scroll', changeBackground);
    };

    watchScroll();

    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  let style = {
    backgroundColor:
      navbar || location.pathname !== '/' ? '#000' : 'rgba(0,0,0,0.4)',
    transition: '0.4s'
  };


    return (
        <Nav style={style}>
            <Logo to='/' data-aos='fade-right' data-aos-duration='1000' data-aos-once='true' data-aos-anchor-placement='center-bottom'><img style={{width: '130px' ,height: '80px' }} src={MetroLogo} alt="Mobile logo"></img></Logo>
            <MenuBars onClick={toggle}/>
            <NavMenu>
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
                <Button to='/contact' primary='true'>Contact Us</Button>
            </NavBtn>
        </Nav>
    )
}

export default Navbar2;