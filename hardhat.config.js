import dotenv from 'dotenv';
require("@nomicfoundation/hardhat-toolbox");
dotenv.config();

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;
const GOERLI_PRIVATE_KEY = process.env.GOERLI_PRIVATE_KEY;


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "hardhat",
  paths: {
    artifacts: "./src/artifacts",
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY]
    },
      'Mantle-Testnet': {
      url: 'https://rpc.testnet.mantle.xyz/',
      accounts: [process.env.PRIV_KEY]
    }
  },
  external: {
    contracts: [
      {
        artifacts: "@chainlink/contracts",
      },
    ],
  },
  etherscan: {
    // ... etherscan configuration options
  },
  // Add the following to use ethers.js with Hardhat
  plugins: [
    "@nomiclabs/hardhat-ethers",
  ],
};
