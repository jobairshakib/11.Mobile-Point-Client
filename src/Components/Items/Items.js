import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Items.css'

const Items = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/item')
            .then(res => res.json())
            .then(data => setItems(data))
    })
    return (
        <div>
            <h1 className='items-title'>Items</h1>
            <div className='items-container'>
                {
                    items.map(item => <Item
                        key={item._id}
                        item={ item }
                    ></Item>)
                }
            </div>
        </div>
    );
};

export default Items;