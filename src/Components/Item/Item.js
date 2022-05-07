import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css'
const Item = ({item}) => {
    const {_id,name, image, shortDescription, price, quantity, supplierName
    } = item;
    const navigate = useNavigate();
    const navigateToItem = () => {
        navigate(`/inventory/${_id}`);
    }
    return (
        <div>
            <div className='item-container'>
                <div className='item-img'>
                    <img src={image} alt="" />
                </div>
                <h4>{name}</h4>
                <h5>Price: {price}</h5>
                <h5>Quantitiy: {quantity}</h5>
                <h5>Supplier: {supplierName}</h5>
                <small>{shortDescription.slice(0,100)}</small><br />
                <button className='stock-btn' onClick={navigateToItem}>Stock Update</button>
            </div>
        </div>
    );
};

export default Item;