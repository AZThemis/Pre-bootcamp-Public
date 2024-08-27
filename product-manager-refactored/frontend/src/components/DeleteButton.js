import React from 'react';
import axios from 'axios';

const DeleteButton = ({ productId, successCallback }) => {
    const deleteProduct = () => {
        axios.delete(`http://localhost:8888/api/products/${productId}`)
            .then(res => {
                successCallback();
            })
            .catch(err => console.log(err));
    };

    return (
        <button onClick={deleteProduct}>Delete</button>
    );
};

export default DeleteButton;