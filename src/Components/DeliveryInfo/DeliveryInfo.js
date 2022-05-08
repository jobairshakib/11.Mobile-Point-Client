import { faHeadset, faShieldAlt, faTentArrowTurnLeft, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const DeliveryInfo = () => {
    return (
        <div>
            <div className='row d-flex p-3 mt-5 w-75 mx-auto'>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex m-3 align-items-center' >
                        <h2><FontAwesomeIcon icon={faTruckFast} /></h2>
                        <div className='mx-3'>
                            <h5>Free Shipping</h5>
                            <p>On all orders over $75.00</p>
                        </div>
                    </div>
                    <div className='d-flex m-3 align-items-center'>
                        <h2><FontAwesomeIcon icon={faTentArrowTurnLeft} /></h2>
                        <div className='mx-3'>
                            <h5>Free Returns</h5>
                            <p>Returns are free within 9 days</p>
                        </div>
                    </div>
                    <div className='d-flex m-3 align-items-center'>
                       <h2> <FontAwesomeIcon icon={faShieldAlt} /></h2>
                        <div className='mx-3'>
                            <h5>100% Payment Secure</h5>
                            <p>Your payment are safe with us.</p>
                        </div>
                    </div>
                    <div className='d-flex m-3 align-items-center'>
                        <h2><FontAwesomeIcon icon={faHeadset} /></h2>
                        <div className='mx-3'>
                            <h5>Support 24/7</h5>
                            <p>Contact us 24 hours a day</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeliveryInfo;