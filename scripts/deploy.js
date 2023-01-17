const { ethers } = require("hardhat");

async function main() {
  [deployer] = await ethers.getSigners();

  Dion = await ethers.getContractFactory('Dion', deployer);
  dion = await Dion.deploy();


  // const cap = ethers.utils.parseEther('200');
  const rate = ethers.utils.parseEther("0.00000000000005");
  Crowdsale = await ethers.getContractFactory('Crowdsale', deployer);
  crowdSale = await Crowdsale.deploy( rate, deployer.address, dion.address);

  await dion.connect(deployer).mint(
    crowdSale.address,
    ethers.utils.parseEther('10000000')
  )

  // await caifus.connect(deployer).mint(
  //   deployer,
  //   ethers.utils.parseEther('90000000')
  // )

  console.log("Crowdsale:",      crowdSale.address);
  console.log("Dion",        dion.address);
}

// npx hardhat run --network localhost scripts/deploy.js

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });