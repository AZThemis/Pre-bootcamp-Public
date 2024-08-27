import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8888/api/products')
            .then(res => setProducts(res.data))
            .catch(err => console.log(err));
    }, []);

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId));
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
                    <DeleteButton productId={product._id} successCallback={() => removeFromDom(product._id)} />
                </div>
            ))}
        </div>
    );
};

export default ProductList;
