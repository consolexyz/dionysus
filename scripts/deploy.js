const { ethers } = require("hardhat");

async function main() {
  // Get the deployer account
  const [deployer] = await ethers.getSigners();

  // Deploy the Dion contract with the deployer as the initial owner
  const Dion = await ethers.getContractFactory("Dion", deployer);
  const dion = await Dion.deploy(deployer.getAddress());
  await dion.waitForDeployment(); // Wait until the transaction is mined

  // Define the rate for the Crowdsale
  const rate = ethers.parseEther("0.00000000000005");

  // Deploy the Crowdsale contract
  const Crowdsale = await ethers.getContractFactory("Crowdsale", deployer);
  const crowdSale = await Crowdsale.deploy(rate, deployer.getAddress(), dion.getAddress());
  await crowdSale.waitForDeployment(); // Wait until the transaction is mined

  // Mint tokens to the Crowdsale contract
  await dion.connect(deployer).mint(
    crowdSale.getAddress(),
    ethers.parseEther("10000000")
  );

  const crowdSaleAddy = await crowdSale.getAddress();
  const DionAddy = await dion.getAddress();

  console.log("Crowdsale:", crowdSaleAddy);
  console.log("Dion:", DionAddy);
}

// npx hardhat run --network localhost scripts/deploy.js

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });


// Crowdsale: 0xbc7F362C1a5dB9f1dBa9bad54E028257BA4a3c56
// Dion: 0x3a368DdB1b8f31B4748d7a4b51C149f0A02c1FFF