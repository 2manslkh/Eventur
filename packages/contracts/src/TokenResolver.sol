// SPDX-License-Identifier: MIT

pragma solidity 0.8.26;

import { IERC721 } from "@openzeppelin/contracts/token/ERC721/IERC721.sol";

import { SchemaResolver } from "@ethereum-attestation-service/eas-contracts/contracts/resolver/SchemaResolver.sol";
import { IEAS, Attestation } from "@ethereum-attestation-service/eas-contracts/contracts/IEAS.sol";

/// @title TokenResolver
/// @notice A sample schema resolver that checks whether a specific amount of tokens was approved to be included in an attestation.
contract TokenResolver is SchemaResolver {
  IERC721 private immutable _targetToken;

  constructor(IEAS eas, IERC721 targetToken) SchemaResolver(eas) {
    _targetToken = targetToken;
  }

  function onAttest(Attestation calldata attestation, uint256 /*value*/) internal view override returns (bool) {
    require(_targetToken.balanceOf(attestation.attester) > 0, "TokenResolver: NotTokenHolder");
    return true;
  }

  function onRevoke(Attestation calldata /*attestation*/, uint256 /*value*/) internal pure override returns (bool) {
    return true;
  }
}
