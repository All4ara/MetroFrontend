import React, { useState, useEffect } from 'react'
import axios from 'axios';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './style.css'


// const Listing = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     height: 500px;
//     width: 100%;
//     margin: 0 10px;
//     font-size: 1em;
// `
// const Image = styled.img`

//     width: 100%;
//     height: 100%;
//     object-fit: cover;
    
// `


const ActiveList = (props) => {
    const [lists, setLists] = useState()
    

    useEffect(() => {
        axios.get("https://metrobrokers-backend.herokuapp.com/posts")
            .then((response) => {
                setLists(response.data)
            })
            .catch((err) => {
                console.log('3')
            })
    }, [])

    let settings = {
        dot: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear",

        responsive: [{
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    }
    return (
        <Slider  {...settings}>
            {lists && lists.map((list) =>
            <div className="card-wrapper">
            
                <div className="card cardy">
                    <div className="card-image">
                        <img className="img" alt="Property Listing" src={list.selectedFile} />
                    </div>
                    <div className="details text-center">
                        <h6>$ {list.price}</h6>
                        <h6>{list.propertyType}</h6>
                        <h6>{list.address}</h6>
                    </div>
                </div>
           
            </div>
            )}
        </Slider>
       
    // <div className="container" style={{height: "700px", marginTop: '4rem'}}>
    //     <h1 className="text-center">Active Listings</h1>
    //     <div className="row " >
            
    //         <Carousel >
    //         {lists && lists.map((list) =>
    //             <Listing>
                
    //                 <h4 className="text-left">{list.address}</h4>
    //                 <Image src={list.selectedFile} alt="Web 3" className="pro-pic"/>
    //                 <h4 className="text-left">{list.propertyType}</h4>
    //                 <h4 className="text-left">{list.price}</h4>
                    
    //             </Listing>
    //         )}
    //         </Carousel>
    
    //     </div> 
    // </div>
    
    
    )
}

export default ActiveList
