import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <h2>Note Wall</h2>
            <Link to="/">Home</Link>
            <Link to="/edit/new">Create Note</Link>
        </nav>
    );
}

export default Navbar;
