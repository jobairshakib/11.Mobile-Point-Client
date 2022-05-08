import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import useItems from '../hooks/useItems';

const ManageInventories = () => {
    const [items, setItems] = useItems();

    const navigate = useNavigate();

    const handleUpdate = (id) => {
        navigate(`/inventory/${ id }`);
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
                });
            toast("Item Deleted Successfully");
        }
    };

    return (
        <div className='p-5'>
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
                                <tr key={item?._id}>
                                    <td>{item?.name}</td>
                                    <td>{item?.price}</td>
                                    <td><button onClick={() => handleUpdate(item._id)} className='btn btn-success'>Update <FontAwesomeIcon icon={faPen} /></button></td>
                                    <td><button onClick={() => handleDelete(item._id)} className='btn btn-danger'>Delete <FontAwesomeIcon icon={faTrash} /></button></td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
            <Link className='text-decoration-none' to='/addItem'><button className='inventory-btn w-25' >Add Item</button></Link>
            <ToastContainer />
        </div>
    );
};

export default ManageInventories;