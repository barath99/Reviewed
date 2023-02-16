require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  paths: {
    artifacts: "./src/artifacts",
  },
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
    },
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
