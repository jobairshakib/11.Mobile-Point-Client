import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ManageItem.css'

const ManageItem = () => {

    const { id } = useParams();

    const [inventory, setInventory] = useState(id);

    const { name, email, price, shortDescription, quantity, image, supplierName
    } = inventory;


    useEffect(() => {
        fetch(`https://murmuring-temple-05921.herokuapp.com/item/${id}`)
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [id])

    const handleDeliver = () => {
        let remaining = parseInt(quantity) - 1;
        let newInventory = { name, email, price, shortDescription, quantity: remaining, image, supplierName };
        setInventory(newInventory);


        fetch(`https://murmuring-temple-05921.herokuapp.com/item/${id}`, {
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


    fetch(`https://murmuring-temple-05921.herokuapp.com/item/${id}`, {
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
        <div className='item-container w-75 mx-auto mt-4'>
            <div className='item-img'>
                <img src={image} alt="" />
            </div>
            <h4>{name}</h4>
            <h5>Price: {price}</h5>
            <h5>Quantitiy: {quantity}</h5>
            <h5>Supplier: {supplierName}</h5>
            <small>{shortDescription}</small><br />
            <button className='w-25 input-btn p-2 my-2' onClick={handleDeliver}>Delivered</button>
            <h4 className='text-bold text-center'>Restock Item</h4>
            <form onSubmit={handleRestock}>
                <input className='w-25 mx-auto' type="number" name='restock' placeholder='Enter the number of item' min={1} />
                <input type="submit" className='input-btn my-2 mx-auto w-25' value='Restock'/>
            </form>
        </div>
    </div>
);
};

export default ManageItem;