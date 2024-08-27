import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8888/api/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err));
    }, [id]);

    const deleteProduct = () => {
        axios.delete(`http://localhost:8888/api/products/${id}`)
            .then(res => {
                navigate('/');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="product-detail">
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <button onClick={deleteProduct}>Delete</button>
        </div>
    );
};

export default ProductDetail;
