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
        require(id > 0 && id < nextId, "Product ID does not exist");
        Product memory prod = products[id - 1]; // Asumiendo que los IDs comienzan en 1
        return (prod.id, prod.name, prod.description, prod.owner);
    }
}
