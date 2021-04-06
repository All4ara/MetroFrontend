import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';

import { Link } from 'react-router-dom';
import './team.css'


const MetroTeam = (props) => {
    const [agents, setAgents] = useState()

    useEffect(() => {
        axios.get("https://metrobrokers-backend.herokuapp.com/users")
            .then((response) => {
                setAgents(response.data)
            })
            .catch((err) => {
                console.log('1')
            })
    }, [])
    return (
        <>
        <div className="bg-overlay" data-aos='fade-down' data-aos-duration='1000' data-aos-once='true' data-aos-anchor-placement='center-bottom'>
            <div className="text-overlay p-5 text-center" >
                <h2>Work With Us</h2>
                <h4>OUR NETWORK OF LUXURY REAL ESTATE AGENTS</h4>
                
                <Link to="/contact"><button type="button" className="btn btn-dark btn-lg">Get Started</button></Link>
            </div>
        </div>
        <div className="container-fluid Team ">
            <div className="row ">

            {agents && agents.map((agent) => 
            <CardDeck className="CardDeck mx-auto">
                <Card>
                    <Card.Img variant="top" src={agent.selectedFile} style={{padding: '3rem', width: '347px', height: '340px', borderRadius: '50%'}} />
                    <Card.Body className="text-center">
                    <Card.Title className="title">{agent.name}</Card.Title>
                    <Card.Text className="">
                        {agent.email}
                        <br/>
                        {agent.phone}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer className="foot text-center">
                        <Link to={`/team/${agent._id}`}><button ype="button" className="w-100 btn btn-dark btn-lg">View Agent</button></Link>
                    </Card.Footer>
                </Card>
            </CardDeck>
            )}
            </div>
        </div>
        </>
    )
}

export default MetroTeam
