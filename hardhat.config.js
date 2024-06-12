require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/cce6b996ce5a41a8937f9e67d1f3c54e",
      accounts: ['aUG9aU/vaBEEDdV2gVYgdpr3oG/if2UyPL+zLxPR18zoU3F+3Mzt7g'],
      chainId: 11155111,
    }
  },
  solidity: "0.8.24",
};
