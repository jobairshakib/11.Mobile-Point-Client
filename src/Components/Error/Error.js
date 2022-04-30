import React from 'react';
import './Error.css'
import error from '../../images/error-404.png'

const Error = () => {
    return (
        <div className='error'>
            <img src={error } alt="" />
        </div>
    );
};

export default Error;