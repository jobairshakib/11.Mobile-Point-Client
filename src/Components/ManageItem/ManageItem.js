import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ManageItem.css'

const ManageItem = () => {

    const { id } = useParams();

    const [inventory, setInventory] = useState(id);

    const { name, email, price, shortDescription, quantity, image, supplierName
    } = inventory;


    useEffect(() => {
        fetch(`http://localhost:5000/item/${id}`)
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [id])

    const handleDeliver = () => {
        let remaining = parseInt(quantity) - 1;
        let newInventory = { name, email, price, shortDescription, quantity: remaining, image, supplierName };
        setInventory(newInventory);


        fetch(`http://localhost:5000/item/${id}`, {
            method: 'PUT',
            body: JSON.stringify(newInventory),
            headers: {
                'Content-type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => console.log(data))
    };

const handleRestock = (event) => {
    event.preventDefault();
    let remaining = parseInt(quantity) + parseInt(event.target.restock.value);
    let newInventory = { name, email, price, shortDescription, quantity: remaining, image, supplierName };
    setInventory(newInventory);


    fetch(`http://localhost:5000/item/${id}`, {
        method: 'PUT',
        body: JSON.stringify(newInventory),
        headers: {
            'Content-type': 'application/json',
        }
    })
        .then(res => res.json())
        .then(data => console.log(data))
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
            <small>{shortDescription}</small><br />
            <button className='w-50 input-btn p-2 my-2 mx-auto' onClick={handleDeliver}>Delivered</button>
            <h2 className='text-bold text-center'>Restock Item</h2>
            <form onSubmit={handleRestock}>
                <input type="number" name='restock' placeholder='Enter the number of item to Re-Stock' />
                <input type="submit" className='input-btn my-2 mx-auto' value='Restock' min={1}/>
            </form>
        </div>
    </div>
);
};

export default ManageItem;