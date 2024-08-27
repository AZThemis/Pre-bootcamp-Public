
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

    return (
        <div>
            <h2>All Products:</h2>
            {products.map((product, index) => (
                <div key={index}>
                    <Link to={`/products/${product._id}`}>{product.title}</Link>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
