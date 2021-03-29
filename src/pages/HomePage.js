import React from 'react';
import HomeCarousel from '../components/Carousel/Carousel';
import ActiveList from '../components/ActiveListings/ActiveList';
import '../App.css';
import Hoods from '../components/Hoods/Hoods';

const Home = () => {
    return (
    <>
     <HomeCarousel />
     <Hoods />
     <div className="slider-body ">
       <div className="container mt-5 carousel">
        <h1 className="slider-title text-center">Active Listings</h1>
        <ActiveList  className="active-list"/>
      </div>
     </div>
     
     
     
    </>
  );
}

export default Home;