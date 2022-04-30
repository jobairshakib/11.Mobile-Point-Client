import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);
    useEffect(() => {
        const email = user.email; 
        fetch(`http://localhost:5000/item`)
            .then(res => res.json())
            .then(data => setItems(data))
    },[])
    return (
        <div>
            <h1>My Items:{items.length}</h1>
        </div>
    );
};

export default MyItems;