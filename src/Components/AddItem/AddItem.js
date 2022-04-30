import React from 'react';
import './AddItem.css'

const AddItem = () => {
    const handleItem = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const price = event.target.price.value;
        const shortDescription = event.target.shortDescription.value;
        const quantity = event.target.quantity.value;
        const img = event.target.img.value;

        console.log(name,price,shortDescription,quantity,img);
    }
    return (
        <div className='addItem-form'>
            <h2 className='additem-title'>Add Item</h2>
            <form onSubmit={handleItem}>
                <input type="text" name='name' placeholder='Name' required />
                <input type="text" name='price' placeholder='Price' required />
                <input type="text" name='shortDescription' placeholder='Description' required />
                <input type="number" name='quantity' placeholder='Quantity' required />
                <input type="text" name='img' placeholder='Image Url' required />
                <input type="submit" className='input-btn' value="Upload" />

            </form>
        </div>
    );
};

export default AddItem;