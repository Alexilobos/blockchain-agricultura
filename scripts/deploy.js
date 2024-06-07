// scripts/deploy.js
async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const Contract = await ethers.getContractFactory("SupplyChain");
    const contract = await Contract.deploy();
    await contract.deployTransaction.wait();  // Asegúrate de esperar a que la transacción se complete

    console.log("SupplyChain deployed to:", contract.address);
}

main().catch((error) => {
    console.error("Error deploying contract:", error);
    process.exitCode = 1;
});
