
import './App.css';
import React, { useState, useEffect, useLayoutEffect } from 'react'
import { Switch, Route, useLocation }  from 'react-router-dom';

import Navbar2 from './components/Navbar2/Navbar2.js'
import Dropdown from './components/Navbar2/Dropdown.js';

import Footer from './components/Footer/Footer.js'
import Aos from 'aos';
import 'aos/dist/aos.css';

import Home from './pages/HomePage'
import Contact from './pages/Contact';
import GlobalStyle from './components/globalStyle';
import AgentHomePage from './components/Agents/Home/AgentHomePage';
import Auth from './components/Agents/Auth/Auth';
import Search from './pages/Search';
import Team from './pages/Team';

import MetroTeamMate from './components/MetroTeamMate/MetroTeamMate';


function App(props) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useLayoutEffect(() => {
    window.scrollTo(0,0)
  }, [location.pathname])

  useEffect(() => {
    Aos.init({});
  }, [])

  return (
    <>

      <GlobalStyle />
        <Navbar2 toggle={toggle}/>
        <Dropdown isOpen={isOpen} toggle={toggle}/>
        <Switch>
          {/* <Route path='/' exact component={About} />
          
          
          <Route path='/homes' exact component={Resources} /> */}
          <Route path='/team' exact component={Team} />
          <Route path='/team/:id' exact component={MetroTeamMate} />
          <Route path='/search' exact component={Search} />
          <Route path='/' exact component={Home} />
          <Route path='/contact' exact component={Contact} />
          <Route path='/agents' exact component={AgentHomePage} />
          <Route path='/auth' exact component={Auth} />
        </Switch>
      
       
      
        <Footer/>
    </>
  );
}

export default App;
