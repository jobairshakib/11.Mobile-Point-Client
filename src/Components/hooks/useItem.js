import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const useItem = () => {
    const { id } = useParams();
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/item/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
    });
    return [item, setItem];
};

export default useItem;