import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className='contact-conatiner'>
            <h2 className='contact-title mt-5 mb-3'>Get In Touch</h2>
            <div className="contact-form">
                <form>
                    <input type="text" name='name' placeholder='Your Name' />
                    <input type="email" name="email" placeholder='Email' />
                    <textarea type="text" name='message' placeholder='Your Message...' />
                </form>
                <button className='btn contact-btn'>Send</button>
            </div>
        </div>
    );
};

export default Contact;