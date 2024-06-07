import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Dashboard from './pages/Dashboard.js';
import ConnectWallet from './components/ConnectWallet';
import ProductManager from './components/ProductManager.js';
import contractABI from './abis/SupplyChain.json'; // Asegúrate de ajustar esta ruta
function App() {
  const contractAddress = "0x9fe46736679d2d9a65f0992f2272de9f3c7fa6e0"; // Tu dirección del contrato aquí.

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/manage-products">Manage Products</Link></li>
          </ul>
        </nav>
        <ConnectWallet />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard contractAddress={contractAddress} abi={contractABI} />} />
<Route path="/manage-products" element={<ProductManager contractAddress={contractAddress} abi={contractABI} />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
