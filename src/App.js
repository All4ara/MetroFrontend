
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


function App() {
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

      
        <Navbar2 toggle={toggle}/>
        <Dropdown isOpen={isOpen} toggle={toggle}/>
        <Switch>
          {/* <Route path='/' exact component={About} />
          <Route path='/about' exact component={Team} />
          <Route path='/rentals' exact component={Search} />
          <Route path='/homes' exact component={Resources} /> */}
          <Route path='/home' exact component={Home} />
          <Route path='/contact' exact component={Contact} />
        </Switch>
      
       
      
        <Footer/>
    </>
  );
}

export default App;
