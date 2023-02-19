pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TextNFT is ERC721URIStorage, Ownable {
    uint256 public nextTokenId;

    constructor() ERC721("TextNFT", "TNFT") {}

    function mint(address to, string memory text) public onlyOwner {
        uint256 tokenId = nextTokenId;
        nextTokenId++;

        string memory tokenURI = createTokenURI(tokenId, text);
        _mint(to, tokenId);
        _setTokenURI(tokenId, tokenURI);
    }

    function createTokenURI(uint256 tokenId, string memory text) internal pure returns (string memory) {
        return string(abi.encodePacked("data:application/json;base64,", encodeMetadata(tokenId, text)));
    }

    function encodeMetadata(uint256 tokenId, string memory text) internal pure returns (bytes memory) {
        bytes memory metadata = abi.encodePacked(
            '{"name": "Text NFT #',
            tokenId,
            '", "description": "An NFT that contains text", "image": "https://example.com/image.png", "attributes": [{"trait_type": "Text", "value": "',
            text,
            '"}]}'
        );
        return bytes(base64Encode(metadata));
    }

    function base64Encode(bytes memory data) internal pure returns (string memory) {
        bytes memory encoded = bytes(base64Encode(data));
        return string(encoded);
    }
}
