
import React, { useReducer } from 'react';

const initialState = {
  firstName: { value: '', error: null },
  lastName: { value: '', error: null },
  email: { value: '', error: null }
};

const formReducer = (state, action) => {
  switch (action.type) {
    case 'SET_VALUE':
      return {
        ...state,
        [action.field]: {
          ...state[action.field],
          value: action.payload,
          error: null
        }
      };
    case 'SET_ERROR':
      return {
        ...state,
        [action.field]: {
          ...state[action.field],
          error: action.payload
        }
      };
    default:
      return state;
  }
};

const FormValidation = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const validate = () => {
    let isValid = true;
    if (state.firstName.value.trim() === '') {
      dispatch({ type: 'SET_ERROR', field: 'firstName', payload: 'First name is required' });
      isValid = false;
    }
    if (state.lastName.value.trim() === '') {
      dispatch({ type: 'SET_ERROR', field: 'lastName', payload: 'Last name is required' });
      isValid = false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(state.email.value.trim())) {
      dispatch({ type: 'SET_ERROR', field: 'email', payload: 'Invalid email address' });
      isValid = false;
    }
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted successfully');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          value={state.firstName.value}
          onChange={(e) => dispatch({ type: 'SET_VALUE', field: 'firstName', payload: e.target.value })}
        />
        {state.firstName.error && <p className="error">{state.firstName.error}</p>}
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          value={state.lastName.value}
          onChange={(e) => dispatch({ type: 'SET_VALUE', field: 'lastName', payload: e.target.value })}
        />
        {state.lastName.error && <p className="error">{state.lastName.error}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={state.email.value}
          onChange={(e) => dispatch({ type: 'SET_VALUE', field: 'email', payload: e.target.value })}
        />
        {state.email.error && <p className="error">{state.email.error}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormValidation;
