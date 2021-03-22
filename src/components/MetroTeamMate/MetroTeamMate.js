import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './metromate.css';

const MetroTeamMate = (props) => {
    const [agent, setAgent] = useState(false)

    useEffect(() => {
        axios.get(`https://metrobrokers-backend.herokuapp.com/users/${props.match.params.id}`)
            .then((response) => {
                setAgent(response.data)
            })
            .catch((err) => {
                console.log('2')
            })
    }, [])

    return (
        <>
            <div className="page-header header-filter" data-parallax="true"></div>
                <div className="main main-raised">

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
                                            <h6>Personal: {agent.phone}</h6>
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
               

        </>
    )
}

export default MetroTeamMate
