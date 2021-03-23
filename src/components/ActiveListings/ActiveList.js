import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Carousel from 'react-elastic-carousel';
import styled from 'styled-components';


const Listing = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 500px;
    width: 100%;
    margin: 0 10px;
    font-size: 1em;
`
const Image = styled.img`

    width: 60%;
    height: 23rem;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`

const breakPoints = [
    { width: 1, itemsToShow : 1},
    { width: 300, itemsToShow : 2},
    { width: 600, itemsToShow : 3},
    // { width: 900, itemsToShow : 4},
    // { width: 1200, itemsToShow : 5},
    // { width: 1500, itemsToShow : 6},
    // { width: 1800, itemsToShow : 7},
    // { width: 2100, itemsToShow : 8},
]

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
    return (
       
    <div className="container" style={{height: "700px", marginTop: '4rem'}}>
        <h1 className="text-center">Active Listings</h1>
        <div className="row " >
            
            <Carousel >
            {lists && lists.map((list) =>
                <Listing>
                
                    <h5 className="text-left">{list.address}</h5>
                    <Image src={list.selectedFile} alt="Web 3" className="pro-pic"/>
                    <h5 className="text-left">{list.propertyType}</h5>
                    <h5 className="text-left">$ {list.price}</h5>
                    
                </Listing>
            )}
            </Carousel>
    
        </div> 
    </div>
    )
}

export default ActiveList
