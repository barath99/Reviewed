require("@nomicfoundation/hardhat-toolbox");

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
