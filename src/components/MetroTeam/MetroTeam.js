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
        <div className="bg-overlay">
            <div className="text-overlay p-5 text-center">
                <h1>Work With Us</h1>
                <h4>OUR NETWORK OF LUXURY REAL ESTATE AGENTS</h4>
                <br/><br/>
                <button type="button" className="btn btn-primary btn-lg">Get Started</button>
            </div>
        </div>
        <div className="container-fluid Team ">
            <div className="row ">

            {agents && agents.map((agent) => 
            <CardDeck className="CardDeck mx-auto">
                <Card>
                    <Card.Img variant="top" src={agent.selectedFile} style={{padding: '3rem', width: '347px', height: '340px', borderRadius: '50%'}} />
                    <Card.Body className="text-center">
                    <Card.Title>{agent.name}</Card.Title>
                    <Card.Text className="">
                        {agent.email}
                        <br/>
                        {agent.phone}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">
                        <Link to={`/team/${agent._id}`}>View Agent</Link>
                    </small>
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
