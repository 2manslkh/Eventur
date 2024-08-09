import "dotenv/config";

import { ethers } from "hardhat";

module.exports = async ({ getNamedAccounts, deployments, getChainId }: any) => {
  const { deploy, read, execute, get } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = await getChainId();

  let tokenAddress = await get("VIPToken");

  let contract = await deploy("TokenResolver", {
    from: deployer,
    log: true,
    args: ["0x4200000000000000000000000000000000000021", tokenAddress.address],
  });
};

module.exports.tags = ["TokenResolver"];
