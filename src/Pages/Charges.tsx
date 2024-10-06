import React from 'react';
import { Link } from 'react-router-dom';

const Charges = () => {
    return (
        <>
            <Link to="/Home">Main Menu &gt;</Link> <Link to="/Settings">Settings &gt;</Link> <h1>Charges</h1>

            <ul>
            <li>Adult</li>
            <li>Junior</li>
            <li>Student</li>
            </ul>
        </>
    )
};

export default Charges;