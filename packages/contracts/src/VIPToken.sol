// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import { ERC721 } from "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract VIPToken is ERC721 {
  uint256 public _nextTokenId;

  constructor() ERC721("VIPToken", "VIP") {}

  function mintVIP(address recipient) public returns (uint256) {
    _safeMint(recipient, _nextTokenId++);
    return _nextTokenId;
  }
}
