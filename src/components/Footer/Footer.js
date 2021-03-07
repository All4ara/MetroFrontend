import React from 'react';

import '../Footer/Footer.css';

const Footer = () => {
    return(
    <footer className=" text-left text-white text-lg-start" style={{backgroundColor: 'rgba(0, 0, 0, 0.9)'}}>
        <section className="p-4 text-center">
        
                <a className="p-1 m-3 btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fa fa-facebook-official" aria-hidden="true" style={{fontSize: '2rem'}}></i></a>

                
                <a className="p-1 m-3 btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fa fa-twitter-square" aria-hidden="true" style={{fontSize: '2rem'}}></i></a>

                
                <a className="p-1 m-3 btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fa fa-google-plus-square" aria-hidden="true" style={{fontSize: '2rem'}}></i></a>

                
                <a className="p-1 m-3 btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fa fa-instagram" aria-hidden="true" style={{fontSize: '2rem'}}></i></a>

                
                <a className="p-1 m-3 btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fa fa-linkedin-square" aria-hidden="true" style={{fontSize: '2rem'}}></i></a>
            </section>
        <div className="container p-4">
            
            <div className="row">
                <div className="col-lg-6 col-md-12 mb-md-0">
                    <h5 className="text-uppercase">About Us</h5>

                    <p style={{fontSize: "1rem", padding: ".5rem"}}>
                    Metropolitan Brokers is a developing real estate company in Brooklyn New York which specializes in residential sales and rentals, while also performing many commercial transactions as well. Our team is young, motivated and there to get the job done for the client. Our number one priority is to make our customers happy. Feel free to each out to us today to make us the next real estate company you use.
                    </p>
                </div>
                <div className="col-lg-6 col-md-12 mb-md-0">
                    <h5 className="text-uppercase">Contact Us</h5>

                    <i class="fa fa-building" style={{fontSize: "1rem", padding: ".5rem"}}></i>
                    2913 Ave W, Brooklyn, NY 11229
                    <br/>
                    <i class="fa fa-phone" aria-hidden="true" style={{fontSize: "1rem", padding: ".5rem"}}></i>
                    Call us FREE +1 (718) 200-8222
                    <br/>
                    <i class="fa fa-envelope-o" aria-hidden="true" style={{fontSize: "1rem", padding: ".5rem"}}></i>
                    <a className="email text-white" href="mailto:+Danieleivazov@gmail.com">Danieleivazov@gmail.com</a>
                </div>
            </div>
        </div>
        <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
            © 2021 Copyright:
            <a className="text-white" href="https://http://metropolitanbrokersny.com//"> MetropolitanBrokersNY.com</a>
        </div>
       
    </footer>
    )
}

export default Footer;