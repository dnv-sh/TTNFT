const hre = require("hardhat");
async function main() {
  const myNFT = await hre.ethers.getContractFactory("ATNFT");
  const URI = "ipfs://QmWHCBwEWLyK558zuiUgnosN8bcn198yKT9DTcQkZqpnyt"
  const WALLET_ADDRESS = "0x26EF5932B404438A41dD2fd94B2Bf1668600265E"
  const CONTRACT_ADDRESS = "0x94a51bE78363bAA7103977795FE3CDF949315547"
  const contract = myNFT.attach(CONTRACT_ADDRESS);
  await contract.mint(WALLET_ADDRESS, URI);
  console.log("NFT minted:", contract);
}
main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});
