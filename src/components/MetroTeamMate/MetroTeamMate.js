import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './metromate.css';
import ActiveList from '../ActiveListings/ActiveList';
import '../../App.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const MetroTeamMate = (props) => {
    const [agent, setAgent] = useState(false)
    const [lists, setLists] = useState()
    

    useEffect(() => {
        axios.get(`https://metrobrokers-backend.herokuapp.com/users/${props.match.params.id}`)
            .then((response) => {
                setAgent(response.data)
            })
            .catch((err) => {
                console.log('2')
            })
    }, [])

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
        <>
            <div className="page-header header-filter" data-parallax="true"></div>
                <div className="main main-raised ">

                {agent && 
                    <div className="profile-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 ml-auto mr-auto">
                                    <div className="profile text-center">
                                        <div className="avatar">
                                            <img className="rounded-circle" src={agent.selectedFile} />
                                        </div>
                                        <div className="name">
                                            <h3 className="title">{agent.name}</h3>
                                            <h6>{agent.email}</h6>
                                            <h6>Personal: <a href={`tel:${agent.phone}`}>{agent.phone}</a></h6>
                                            <h6>Office: {agent.officePhone}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="description text-left p-2">
                                <p className="p-3">{agent.aboutMe}</p>
                            </div>
                        </div>    
                    </div> 
                    }
                </div>
                <div className="slider-body ">
                    <div className="container mt-5 carousel">
                        <h1 className="slider-title text-center">Sold Listings</h1>
                        <Slider  {...settings}>
                        {lists && lists.map((list) =>
                        {if(list.agent === agent._id && list.stats === 'Sold') {
                            return (
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
                        )}}
                        )}
                    </Slider>
                    </div>
                </div>
                
               

        </>
    )
}

export default MetroTeamMate
