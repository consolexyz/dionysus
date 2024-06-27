require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()


/** @type import('hardhat/config').HardhatUserConfig */
const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;


module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    localhost: {
      chainId: 31337,
    },
    // arbitrum: {
    //   url: ARBITRUM_RPC_URL,
    //   accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
    //   //accounts: {
    //   //     mnemonic: MNEMONIC,
    //   // },
    //   saveDeployments: true,
    //   chainId:42161 ,
    // },
    // arbitrum_rinkeby: {
    //   url: ARBITRUM_RINKEBY_RPC_URL ,
    //   accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
    //   //   accounts: {
    //   //     mnemonic: MNEMONIC,
    //   //   },
    //   saveDeployments: true,
    //   chainId: 421611,
    // },
    // },
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
      saveDeployments: true,
      chainId: 11155111,
    },
  },
  // gasReporter: {
  //   enabled: REPORT_GAS,
  //   currency: "USD",
  //   outputFile: "gas-report.txt",
  //   noColors: true,
  //   // coinmarketcap: process.env.COINMARKETCAP_API_KEY,
  // },
  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
      1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
    },
    user1: {
      default: 1,
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.0",
      },
      {
        version: "0.8.20",
        settings: {},
      },
    ],

  },
  // mocha: {
  //   timeout: 200000, // 200 seconds max for running tests
  // },
  // warnings: {
  //   '*': {
  //     default: 'off',
  //   },
  // }
}


