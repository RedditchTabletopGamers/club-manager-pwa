import React from 'react';
import { Link } from 'react-router-dom';

const Reports = () => {
    return (
        <>
            <Link to="/Home">Main Menu &gt;</Link> <h1>Data</h1>
            <a href="sumupmerchant://pay/1.0?amount=10.00&currency=EUR&sup_pk_H5Ik3SoFSpCWULKRRNPQsmfvNv0WyskTK&title=My%20title&callbackfail=samplepaymentapp%3A%2F%2F&callbacksuccess=samplepaymentapp%3A%2F%2F">Test</a>
        </>
    )
};

export default Reports;