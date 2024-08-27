import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import ProductForm from './ProductForm';

const EditProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8888/api/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err));
    }, [id]);

    const updateProduct = (productData) => {
        axios.put(`http://localhost:8888/api/products/${id}`, productData)
            .then(res => {
                navigate('/');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="edit-form">
            {product && (
                <ProductForm 
                    initialTitle={product.title}
                    initialPrice={product.price}
                    initialDescription={product.description}
                    onSubmitProp={updateProduct}
                />
            )}
        </div>
    );
};

export default EditProduct;
