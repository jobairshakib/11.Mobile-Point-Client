import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ManageItem = () => {
    const { id } = useParams();

    const [item, setItem] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/item/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])
    return (
        <div>
            <h1>This is Item : {item.name}</h1>
        </div>
    );
};

export default ManageItem;