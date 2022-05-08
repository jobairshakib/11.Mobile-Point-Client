import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contac';
import DeliveryInfo from '../DeliveryInfo/DeliveryInfo';
import useItems from '../hooks/useItems';
import Item from '../Item/Item';
import './Home.css'

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
                
            </div>
            <Link className='text-decoration-none' to='/manageInventories'><button className='inventory-btn' >Manage Inventories</button></Link>
            <Contact></Contact>
            <DeliveryInfo></DeliveryInfo>
        </div>
    );
};

export default Home;