import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    validateField(name, value);
  };

  const validateField = (name, value) => {
    let fieldErrors = {};
    
    switch (name) {
      case 'firstName':
      case 'lastName':
        if (value.length < 2) {
          fieldErrors[name] = `${name === 'firstName' ? 'First' : 'Last'} Name must be at least 2 characters`;
        }
        break;
      case 'email':
        if (value.length < 5) {
          fieldErrors[name] = 'Email must be at least 5 characters';
        }
        break;
      case 'password':
      case 'confirmPassword':
        if (formData.password !== formData.confirmPassword) {
          fieldErrors['password'] = 'Passwords must match';
          fieldErrors['confirmPassword'] = 'Passwords must match';
        }
        if (value.length < 8) {
          fieldErrors['password'] = 'Password must be at least 8 characters';
          fieldErrors['confirmPassword'] = 'Password must be at least 8 characters';
        }
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      ...fieldErrors
    }));
  };

  return (
    <div className="App">
      <form>
        <div>
          <label>First Name: </label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
          {errors.firstName && <p className="error">{errors.firstName}</p>}
        </div>
        <div>
          <label>Last Name: </label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
          {errors.lastName && <p className="error">{errors.lastName}</p>}
        </div>
        <div>
          <label>Email: </label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div>
          <label>Password: </label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div>
          <label>Confirm Password: </label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
          {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
        </div>
      </form>
      <h3>Your Form Data</h3>
      <p>First Name: {formData.firstName}</p>
      <p>Last Name: {formData.lastName}</p>
      <p>Email: {formData.email}</p>
      <p>Password: {formData.password}</p>
      <p>Confirm Password: {formData.confirmPassword}</p>
    </div>
  );
}

export default App;