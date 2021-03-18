import React, { useState, useEffect } from 'react';
import axios from 'axios';


const MetroTeam = () => {
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
        <div className="container p-5">
            <div className="row p-5">
                <ul>
                    {agents && agents.map((agent) => 
                    <li><img style={{width: '100px', height: '100px'}} src={agent.selectedFile} alt={agent.name}/> <br/> {agent.name} <br/> {agent.email} <br/> {agent.phone}</li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default MetroTeam
