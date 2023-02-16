const { ethers } = require("hardhat");

async function main() {
  const Review = await ethers.getContractFactory("Reviewed");
  const review = await Review.deploy();
  console.log("Review contract deployed to:", review.address);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
