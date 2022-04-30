import React from 'react';
import useItems from '../hooks/useItems';
import Item from '../Item/Item';
import './Items.css'

const Items = () => {
    const [items, setItems] = useItems();
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