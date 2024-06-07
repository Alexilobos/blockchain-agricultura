import React, { useState } from 'react';  // Importa React y useState
import { Web3Provider } from '@ethersproject/providers';
import { ethers } from 'ethers';

function ProductManager({ contractAddress, abi }) {
    const [productId, setProductId] = useState(0);
    const [productInfo, setProductInfo] = useState({});

    const fetchProduct = async () => {
        try {
            const provider = new Web3Provider(window.ethereum);
            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(contractAddress, abi, signer);
            
            const data = await contract.getProduct(productId);
            setProductInfo({
                id: data[0].toString(),
                name: data[1],
                description: data[2],
                owner: data[3]
            });
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
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
