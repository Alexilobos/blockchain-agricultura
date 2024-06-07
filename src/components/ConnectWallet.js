import React, { useState } from 'react';
import { Web3Provider } from '@ethersproject/providers';

function ConnectWallet() {
  const [userAccount, setUserAccount] = useState(null);

  const connectWalletHandler = async () => {
    if (window.ethereum) {
      const provider = new Web3Provider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      setUserAccount(accounts[0]);
    } else {
      alert("Please install MetaMask!");
    }
  };

  return (
    <div>
      <button onClick={connectWalletHandler}>Connect Wallet</button>
      {userAccount && <p>Connected Account: {userAccount}</p>}
    </div>
  );
}

export default ConnectWallet;
