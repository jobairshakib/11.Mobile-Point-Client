import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ManageItem.css'

const ManageItem = () => {
    
    const { id } = useParams();

    const [item, setItem] = useState({});

    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        fetch(`http://localhost:5000/item/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])

    const handleDeliver = () => {
        setQuantity(quantity - 1);
    }

    const handleRestock = (event) => {
        event.preventDefault();

        const restockItem = parseInt(event.target.restock.value);
        console.log(restockItem);
        setQuantity(quantity + restockItem);
        event.target.reset();
    }

    return (
        <div>
            <div className='item-container'>
                <div className='item-img'>
                    <img src={item.image} alt="" />
                </div>
                <h4>{item.name}</h4>
                <h5>Price: {item.price}</h5>
                <h5>Quantitiy: {quantity}</h5>
                <h5>Supplier: {item.supplierName}</h5>
                <small>{item.shortDescription}</small><br />
                <button className='w-50 input-btn p-2 my-2 mx-auto' onClick={handleDeliver}>Delivered</button>
                <h2 className='text-bold text-center'>Restock Item</h2>
                <form onSubmit={handleRestock}>
                    <input type="number" name='restock' placeholder='Enter the number of item to Re-Stock' />
                    <input type="submit" className='input-btn my-2 mx-auto' value='Restock' />
                </form>
            </div>
        </div>
    );
};

export default ManageItem;