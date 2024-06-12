import React, { useState } from 'react';  // Importa React y useState
import { Web3Provider } from '@ethersproject/providers';
import { ethers } from 'ethers';

function ProductManager({ contractAddress, abi }) {
    const [productId, setProductId] = useState(0);
    const [productInfo, setProductInfo] = useState({});
    const [newProductName, setNewProductName] = useState('');
    const [newProductDescription, setNewProductDescription] = useState('');

    const fetchProduct = async () => {
        const provider = new Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, abi, signer);

        try {
            const data = await contract.getProduct(productId);
            setProductInfo({
                id: data[0].toString(),
                name: data[1],
                description: data[2],
                owner: data[3]
            });
        } catch (error) {
            console.error('Error:', error);
            setProductInfo({});
            alert("Product not found or error retrieving the product.");
        }
    };    

    const addProduct = async () => {
        const provider = new Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        console.log("ABI:", JSON.stringify(abi));
        const contract = new ethers.Contract(contractAddress, abi.abi, signer);
        
        try {
            await contract.addProduct(newProductName, newProductDescription);
            alert('Product added successfully!');
            setNewProductName('');
            setNewProductDescription('');
        } catch (error) {
            console.error('Error adding product:', error);
            alert('Failed to add product.');
        }
    };

    return (
        <div>
            <h2>Add New Product</h2>
            <input
                type="text"
                placeholder="Enter product name"
                value={newProductName}
                onChange={(e) => setNewProductName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Enter product description"
                value={newProductDescription}
                onChange={(e) => setNewProductDescription(e.target.value)}
            />
            <button onClick={addProduct}>Add Product</button>

            <h2>Fetch a Product</h2>
            <input
                type="number"
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
            />
            <button onClick={fetchProduct}>Fetch Product</button>
            {productInfo && (
                <div>
                    <p>ID: {productInfo.id}</p>
                    <p>Name: {productInfo.name}</p>
                    <p>Description: {productInfo.description}</p>
                    <p>Owner: {productInfo.owner}</p>
                </div>
            )}
        </div>
    );
}

export default ProductManager;
