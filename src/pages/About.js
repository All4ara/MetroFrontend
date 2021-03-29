import React from 'react'
import logo from '../images/metrologo2.png'

const About = () => {
    return (
        <div className="container text-left" style={{paddingTop: '10rem', height: '100vh'}}>
            <div>
                <img style={{float: 'left', margin: '20px 30px 30px 0', width: '40vw', height: '35vh'}} src={logo}/>
            </div>
        </div>
    )
}

export default About
