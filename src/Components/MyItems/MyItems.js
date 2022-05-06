import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);
    useEffect(() => {
        const email = user.email; 
        fetch(`http://localhost:5000/item?email=${email}`)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [user])
    

    const handleDelete = id => {
        const confirm = window.confirm('Are you want to delete this item?');

        if (confirm) {
            const url = `http://localhost:5000/item/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remainingItem = items.filter(item => item._id !== id);
                    setItems(remainingItem)
                })
        }
    }

    return (
            <div className='p-5'>
            <h1 className='text-center'>My Items:{items.length}</h1>
            <table className="table w-75 mx-auto  table-striped">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(item => { 
                            return (
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td><button onClick={()=>handleDelete(item._id)} className='btn btn-danger'>Delete</button></td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyItems;