import React from 'react'
import './hoods.css'

const Hoods = () => {
    return (
        <div className="container my-5">
            <div className="text-center" data-aos='fade-down' data-aos-duration='1000' data-aos-once='true' data-aos-anchor-placement='center-bottom'>
                <h2 className="section-heading text-uppercase my-5">Services</h2>
            </div>
            <div className="row text-center" data-aos='fade-up' data-aos-duration='1000' data-aos-once='true' data-aos-anchor-placement='center-bottom'>
                <div className="col-md-4">
                    <span className="fa-stack fa-4x">
                        <i className="fa fa-circle fa-stack-2x text-dark"></i>
                        <i className="fa fa-dollar fa-stack-1x fa-inverse"></i>
                    </span>
                    <h4 className="my-3">Sellers</h4>
                    <p className="">With an unmatched team of experienced agents, Metropolitan Brokers will seamlessly guied you to the finish line.</p>
                </div>
                <div className="col-md-4">
                    <span className="fa-stack fa-4x">
                        <i className="fa fa-circle fa-stack-2x text-dark"></i>
                        <i className="fa fa-area-chart fa-stack-1x fa-inverse mx-1"></i>
                    </span>
                    <h4 className="my-3">Market Analysis</h4>
                    <p className="">With the best neighborhood insights in the metropolitan area, we've captured the color and diversity of community.</p>
                </div>
                <div className="col-md-4">
                    <span className="fa-stack fa-4x">
                        <i className="fa fa-circle fa-stack-2x text-dark"></i>
                        <i className="fa fa-bank fa-stack-1x fa-inverse mx-1"></i>
                    </span>
                    <h4 className="my-3">Buyers</h4>
                    <p className="">With a great selection of homes for sale, our agents can match you with a house you will want to call home.</p>
                </div>
            </div>
        </div>
    )
}

export default Hoods
