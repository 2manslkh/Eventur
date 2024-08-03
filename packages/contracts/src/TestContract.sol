// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.21;

contract TestContract {
  mapping(address => uint256) public balances;

  /**
   * @dev Deposit ETH to the contract
   */
  function deposit() external payable {
    balances[msg.sender] += msg.value;
  }

  /**
   * @dev Withdraw ETH from the contract
   */
  function withdraw() external {
    // require(balances[msg.sender] > 0, "Insufficient balance");
    uint256 balance = balances[msg.sender];
    balances[msg.sender] = 0;
    payable(msg.sender).transfer(balance);
  }

  function getBalance(address _user) external view returns (uint256) {
    return balances[_user];
  }
}
