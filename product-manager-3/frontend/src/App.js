import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import EditProduct from './components/EditProduct';
import axios from 'axios'; 
function App() {
    return (
        <Router>
            <div className="App">
                <h1>Product Manager</h1>
                <ProductForm onSubmitProp={(productData) => {
                    axios.post('http://localhost:8888/api/products', productData)
                        .then(res => console.log(res))
                        .catch(err => console.log(err));
                }} />
                <Routes>
                    <Route path="/" element={<ProductList />} />
                    <Route path="/products/:id" element={<ProductDetail />} />
                    <Route path="/products/:id/edit" element={<EditProduct />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
