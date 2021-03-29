import React from 'react'
import logo from '../images/metrologo2.png'

const About = () => {
    return (
        <div className="container text-left" style={{paddingTop: '11rem', height: '100vh'}}>
            <div>
                <img style={{float: 'left', margin: '20px 30px 30px 0', width: '40vw', height: '35vh'}} src={logo}/>
                <p style={{paddingTop: '6rem'}}>Metropolitan Brokers is a developing real estate company in Brooklyn New York which specializes in residential sales and rentals, while also performing many commercial transactions as well. Our team is young, motivated and there to get the job done for the client. Our number one priority is to make our customers happy. Feel free to each out to us today to make us the next real estate company you use.</p>
                
            </div>
        </div>
    )
}

export default About
