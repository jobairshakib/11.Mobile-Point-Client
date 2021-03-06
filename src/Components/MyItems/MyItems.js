import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);
    useEffect(() => {
        const email = user?.email; 
        fetch(`https://murmuring-temple-05921.herokuapp.com/item?email=${email}`)
            .then(res => res.json())
            .then(data => setItems(data))
    }, [user])
    

    const navigate = useNavigate();

    const handleUpdate = (id) => {
        navigate(`/inventory/${id}`);
    };

    const handleDelete = id => {
        const confirm = window.confirm('Are you want to delete this item?');

        if (confirm) {
            const url = `https://murmuring-temple-05921.herokuapp.com/item/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remainingItem = items.filter(item => item._id !== id);
                    setItems(remainingItem)
                })
            toast("Item Deleted Successfully");
        }
    }

    return (
            <div className='p-5 vh-100'>
            <table className="table w-75 mx-auto  table-striped">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Update</th>
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
                                    <td><button onClick={() => handleUpdate(item._id)} className='btn btn-success'>Update <FontAwesomeIcon icon={faPen} /></button></td>
                                    <td><button onClick={() => handleDelete(item._id)} className='btn btn-danger'>Delete <FontAwesomeIcon icon={faTrash} /></button></td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
            <ToastContainer/>
        </div>
    );
};

export default MyItems;