import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import './AddItem.css'

const AddItem = () => {
    const [user] = useAuthState(auth);
    const handleItem = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = user?.email;
        const price = event.target.price.value;
        const shortDescription = event.target.shortDescription.value;
        const quantity = event.target.quantity.value;
        const image = event.target.image.value;
        const supplierName = event.target.supplierName.value;

        const url = `http://localhost:5000/addItem`;
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                name, email, price, shortDescription, quantity, image, supplierName
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                event.target.reset();
            });
        toast('Item Added');
    }
    return (
        <div className='addItem-form'>
            <h2 className='additem-title'>Add Item</h2>
            <form onSubmit={handleItem}>
                <input type="text" name='name' placeholder='Name' required />
                <input type="text" name='email' placeholder='Name' value={user?.email} readOnly required />
                <input type="text" name='price' placeholder='Price' required />
                <input type="text" name='shortDescription' placeholder='Description' required />
                <input type="number" name='quantity' placeholder='Quantity' min={1} required />
                <input type="text" name='image' placeholder='Image Url' required />
                <input type="text" name='supplierName' placeholder='Supplier Name' required />
                <input type="submit" className='input-btn' value="Upload" />

            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddItem;