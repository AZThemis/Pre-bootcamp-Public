import React, { useState } from 'react';

const ProductForm = ({ initialTitle = '', initialPrice = '', initialDescription = '', onSubmitProp }) => {
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitProp({ title, price, description });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{initialTitle ? 'Edit Product' : 'Create a New Product'}</h2>
            <div>
                <label>Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label>Price:</label>
                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div>
                <label>Description:</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            </div>
            <button type="submit">{initialTitle ? 'Update Product' : 'Create'}</button>
        </form>
    );
};

export default ProductForm;