// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SupplyChain {
    struct Product {
        uint id;
        string name;
        string description;
        address owner;
    }

    Product[] public products;
    uint public nextId = 1;

    function addProduct(string memory name, string memory description) public {
        products.push(Product(nextId, name, description, msg.sender));
        nextId++;
    }

    function getProduct(uint id) public view returns (uint, string memory, string memory, address) {
        for (uint i = 0; i < products.length; i++) {
            if (products[i].id == id) {
                Product memory prod = products[i];
                return (prod.id, prod.name, prod.description, prod.owner);
            }
        }
        revert("Product not found");
    }
}
