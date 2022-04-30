import React from 'react';
import './Footer.css'

const Footer = () => {
    const date = new Date();
    return (
        <footer className=' footer text-center mt-5'>
            <p>Mobile Point</p>
            <p><small>
                ©{date.getFullYear()} Mobile Point. All Rights Reserved.
            </small></p>
        </footer>
    );
};

export default Footer;