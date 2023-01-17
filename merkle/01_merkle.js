 const {MerkleTree} = require("merkletreejs");
 const keccak256 = require("keccak256");



 let whiteaddresess = [
    "0x19d7Fcd4325270A5A7eF377a7eb1511D64249633",
    "0x8b62486a3fc24024AA52E0e39A34aE4a83755c0c",
    "0x0Ec5B91Cd705ae3B5Cd348859FcD99d252aAbc51",
    "0x38734F7a0175E455bAC51A7D67059042360Eb5F1",
    "0x86785AaA8E0DA968aefDADFECBc21beE6854a2Fb"
 ]

const leafNodes = whiteaddresess.map(addr => keccak256(addr));
const merkleTree = new MerkleTree(leafNodes, keccak256 , {sortPairs: true});

const rootHash =  merkleTree.getRoot();

console.log("whitelist Merkle Tree\n" , merkleTree.toString());
console.log("RootHash :" , rootHash);

// console.log(leafNodes);
// console.log(merkleTree);


