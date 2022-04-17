const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ATNFT", function () {
  it("Should return the new greeting once it's changed", async function () {
    const myNFT = await ethers.getContractFactory("ATNFT");
    const nft = await myNFT.deploy();
    const URI = "ipfs://QmWJBNeQAm9Rh4YaW8GFRnSgwa4dN889VKm9poc2DQPBkv";
    await nft.deployed();
    
    await nft.mint("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", URI)
    expect(await nft.tokenURI(1)).to.equal(URI)
  });
});
