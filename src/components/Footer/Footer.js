import React from 'react';

import '../Footer/Footer.css';

const Footer = () => {
    return(
    <footer className="w-100 text-left text-white text-lg-center" style={{backgroundColor: 'rgba(0, 0, 0, 0.9)'}}>
        
        <div className="containers">
           
            <div className="row p-1" data-aos='fade-right' data-aos-duration='1000' data-aos-once='true' data-aos-anchor-placement='center-bottom'>
                
                <div className="col-lg-6 col-md-12 mb-2 p-5">
                    <h5 className="text-uppercase">Contact Us</h5>

                    
                    <p><i className="fa fa-building" style={{fontSize: "1rem", padding: ".5rem"}}></i>2913 Ave W, Brooklyn, NY 11229</p>
                    
                    
                    <p><i className="fa fa-phone" aria-hidden="true" style={{fontSize: "1rem", padding: ".5rem"}}></i><a className="phone text-white" href="tel:+17182008222">Call us FREE +1 (718) 200-8222</a></p>
                    
                    <i className="fa fa-envelope-o" aria-hidden="true" style={{fontSize: "1rem", padding: ".5rem"}}></i>
                    <a className="email text-white" href="mailto:+Danieleivazov@gmail.com">Danieleivazov@gmail.com</a>

                    <div className="mt-4">
                        <h5 className="text-uppercase">Follow Us On</h5>
                        <a className="p-2 btn btn-outline-light btn-floating m-3" href="https://www.facebook.com/metropolitanbrokersny/" role="button"><i className="fa fa-facebook-official" aria-hidden="true" style={{fontSize: '1.5rem'}}></i></a>

                        <a className="p-2 btn btn-outline-light btn-floating m-3" href="https://www.instagram.com/metropolitanbrokers/?hl=en" role="button"><i className="fa fa-instagram" aria-hidden="true" style={{fontSize: '1.5rem'}}></i></a>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 p-5">
                    <h5 className="text-uppercase">About Us</h5>

                    <p style={{fontSize: "1rem", paddingTop: ".5rem", padding: '0 40px'}}>
                    Metropolitan Brokers is a developing real estate company in Brooklyn New York which specializes in residential sales and rentals, while also performing many commercial transactions as well. Our team is young, motivated and there to get the job done for the client. Our number one priority is to make our customers happy. Feel free to each out to us today to make us the next real estate company you use.
                    </p>
                </div>
            </div>
        </div>
        
        <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 1)'}} >
            © 2021 Copyright: <a className="text-white" href="https://http://metropolitanbrokersny.com//"> MetropolitanBrokersNY.com</a>
        </div>
       
    </footer>
    )
}

export default Footer;