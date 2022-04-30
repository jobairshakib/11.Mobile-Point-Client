import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import useItems from '../hooks/useItems';
import Item from '../Item/Item';

const Home = () => {
    const [items, setItems] = useItems();
    return (
        <div>
            <Banner></Banner>
            <div className='items-container'>
                {
                    items.slice(0,6).map(item => <Item
                        key={item._id}
                        item={item}
                    ></Item>)
                }
                <button><Link to='/manageInventories'>Manage Inventories</Link></button>
            </div>
        </div>
    );
};

export default Home;