import React from 'react';
import ProductManager from '../components/ProductManager';

function Dashboard({ contractAddress, abi }) {
    return (
        <div>
            <h1>Dashboard</h1>
            <ProductManager contractAddress={contractAddress} abi={abi} />
        </div>
    );
}

export default Dashboard;
