import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css'

const Footer = () => {
    const date = new Date();
    return (
        <footer className=' footer text-center mt-5'>
            <div className="row w-100  mx-0  text-white p-5">
                <div className="col-md-3 footer">
                    <h6 className="mb-4">About us</h6>
                    <p>
                        Mobile gadgets in Mobile Point can be found by brands, price range and so on.
                    </p>
                </div>
                <div className="col-md-3 footer">
                    <h6 className="mb-4">QuickLinks</h6>

                    <h6 className="hover-style" >Homepages</h6>
                    <h6 className="hover-style">About</h6>
                    <h6 className="hover-style">News</h6>
                    <h6 className="hover-style">Contact</h6>

                </div>
                <div className="col-md-3 footer">
                    <h6 className="mb-4">Press</h6>
                    <h6 className="hover-style">Press Release</h6>
                    <h6 className="hover-style">Contact Us</h6>
                </div>
                <div className="col-md-3 footer">
                    <h6 className="mb-4"> <FontAwesomeIcon className="text-primary" icon={faLocationDot} /> Address</h6>
                    <h6 className="hover-style"> <FontAwesomeIcon className="text-primary" icon={faPhone} /> +1 333 444 555</h6>
                    <h6 className="hover-style"> <FontAwesomeIcon className="text-primary" icon={faEnvelope} /> mobilepoint@gmail.com</h6>
                </div>
                <p className="copyright">
                    <small>Copyright {date.getFullYear()} © Mobile Point</small>
                </p>
            </div>

            
            
            
            
            
            
            
            
            
            
            
            
            
            {/* <p>Mobile Point</p>
            <p><small>
                ©{date.getFullYear()} Mobile Point. All Rights Reserved.
            </small></p> */}
        </footer>
    );
};

export default Footer;