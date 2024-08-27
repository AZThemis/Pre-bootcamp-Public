import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8888/api/products')
            .then(res => setProducts(res.data))
            .catch(err => console.log(err));
    }, []);

    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8888/api/products/${productId}`)
            .then(res => {
                setProducts(products.filter(product => product._id !== productId));
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="product-list">
            <h2>All Products:</h2>
            {products.map((product, index) => (
                <div key={index}>
                    <Link to={`/products/${product._id}`}>{product.title}</Link>
                    {' | '}
                    <Link to={`/products/${product._id}/edit`}>Edit</Link>
                    {' | '}
                    <button onClick={() => deleteProduct(product._id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
