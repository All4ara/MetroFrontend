import React from 'react'
import './hoods.css'

const Hoods = () => {
    return (
        <div className="container my-5">
            <div className="text-center">
                <h2 className="section-heading text-uppercase my-5">Services</h2>
            </div>
            <div className="row text-center">
                <div className="col-md-4">
                    <span className="fa-stack fa-4x">
                        <i className="fa fa-circle fa-stack-2x text-dark"></i>
                        <i className="fa fa-dollar fa-stack-1x fa-inverse"></i>
                    </span>
                    <h4 className="my-3">Sellers</h4>
                    <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                </div>
                <div className="col-md-4">
                    <span className="fa-stack fa-4x">
                        <i className="fa fa-circle fa-stack-2x text-dark"></i>
                        <i className="fa fa-area-chart fa-stack-1x fa-inverse mx-1"></i>
                    </span>
                    <h4 className="my-3">Market Analysis</h4>
                    <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                </div>
                <div className="col-md-4">
                    <span className="fa-stack fa-4x">
                        <i className="fa fa-circle fa-stack-2x text-dark"></i>
                        <i className="fa fa-bank fa-stack-1x fa-inverse mx-1"></i>
                    </span>
                    <h4 className="my-3">Buyers</h4>
                    <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                </div>
            </div>
        </div>
    )
}

export default Hoods
