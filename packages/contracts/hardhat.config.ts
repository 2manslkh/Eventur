// import "@nomicfoundation/hardhat-ethers";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-deploy";
import "dotenv/config";
import "@nomicfoundation/hardhat-foundry";

import { ethers } from "ethers";

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html

let ACCOUNT;
let useMnemonic = false;

// Setup Default Values
let PRIVATE_KEY;
if (process.env.PRIVATE_KEY) {
  PRIVATE_KEY = process.env.PRIVATE_KEY;
} else {
  console.log("⚠️ Please set PRIVATE_KEY in the .env file");
  PRIVATE_KEY = ethers.Wallet.createRandom().signingKey.privateKey;
}

let PRIVATE_KEY_TESTNET;
if (process.env.PRIVATE_KEY_TESTNET) {
  PRIVATE_KEY_TESTNET = process.env.PRIVATE_KEY_TESTNET;
} else {
  console.log("⚠️ Please set PRIVATE_KEY_TESTNET in the .env file");
  PRIVATE_KEY_TESTNET = ethers.Wallet.createRandom().signingKey.privateKey;
}

if (useMnemonic) {
  let MNEMONIC;
  if (process.env.MNEMONIC) {
    MNEMONIC = process.env.MNEMONIC;
  } else {
    console.log("⚠️ Please set MNEMONIC in the .env file");
    MNEMONIC = "test test test test test test test test test test test junk";
  }
  ACCOUNT = {
    mnemonic: MNEMONIC,
  };
} else {
  ACCOUNT = [PRIVATE_KEY];
}

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    localhost: {
      url: "http://0.0.0.0:8545",
      saveDeployments: true,
      // accounts: "test test test test test test test test test test test junk",
      // accounts: [PRIVATE_KEY],
    },
    hardhat: {
      // TODO: Add snapshot block
      // forking: {
      //   url: process.env.ALCHEMY_PROVIDER_SEPOLIA,
      //   block: 4714714,
      // },
      blockGasLimit: 10000000000,
      mining: {
        auto: true,
      },
      // accounts: ACCOUNT,
    },
    mainnet: {
      url: `https://1rpc.io/eth`,
      chainId: 1,
      accounts: ACCOUNT,
      saveDeployments: true,
    },
    goerli: {
      url: `https://rpc.ankr.com/eth_goerli`,
      chainId: 5,
      accounts: ACCOUNT,
      saveDeployments: true,
    },
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/8QaknMeBnwogGar3EwmrGzcW_KPTq73A",
      chainId: 80001,
      accounts: ACCOUNT,
      saveDeployments: true,
      verify: {
        etherscan: {
          apiKey: "5XUJHBNCVSF2J3F3W865U6ZYNTW2G7Z8WV",
        },
      },
    },
    optimism_mainnet: {
      url: "https://mainnet.optimism.io",
      chainId: 10,
      accounts: ACCOUNT,
      saveDeployments: true,
    },
    optimism_testnet: {
      url: "https://goerli.optimism.io",
      chainId: 420,
      accounts: ACCOUNT,
      saveDeployments: true,
    },
    arbitrum_mainnet: {
      url: "https://arb1.arbitrum.io/rpc",
      chainId: 42161,
      accounts: ACCOUNT,
      saveDeployments: true,
    },
    arbitrum_testnet: {
      url: "https://sepolia-rollup.arbitrum.io/rpc",
      chainId: 421614,
      accounts: ACCOUNT,
      saveDeployments: true,
    },
    cronos_testnet: {
      url: `https://evm-t3.cronos.org`,
      chainId: 338,
      accounts: ACCOUNT,
    },
    cronos_mainnet: {
      url: `https://mainnet.cronoslabs.com/v1/55e37d8975113ae7a44603ef8ce460aa/`,
      chainId: 25,
      accounts: ACCOUNT,
      gasLimit: 1000000000000,
    },
    scroll_testnet: {
      url: "https://sepolia-rpc.scroll.io/",
      chainId: 534351,
      accounts: ACCOUNT,
      saveDeployments: true,
    },
    metis_testnet: {
      url: "https://goerli.gateway.metisdevops.link",
      chainId: 599,
      accounts: ACCOUNT,
      saveDeployments: true,
    },
    base_goerli: {
      url: "https://goerli.base.org",
      chainId: 84531,
      accounts: ACCOUNT,
      saveDeployments: true,
    },
    base_sepolia: {
      url: "https://sepolia.base.org",
      chainId: 84532,
      accounts: ACCOUNT,
      saveDeployments: true,
    },
    mantle_testnet: {
      url: "https://rpc.testnet.mantle.xyz",
      chainId: 5001,
      accounts: ACCOUNT,
      saveDeployments: true,
    },
    taiko_testnet: {
      url: "https://rpc.jolnir.taiko.xyz",
      chainId: 167006,
      accounts: ACCOUNT,
      saveDeployments: true,
    },
    gnosis: {
      url: "https://rpc.gnosischain.com/",
      chainId: 100,
      accounts: ACCOUNT,
      saveDeployments: true,
      gasPrice: 3000000000,
    },
    gnosis_testnet: {
      url: "https://rpc.chiadochain.net",
      chainId: 10200,
      accounts: ACCOUNT,
      saveDeployments: true,
    },
    sepolia: {
      url: "https://1rpc.io/sepolia",
      chainId: 11155111,
      accounts: ACCOUNT,
      saveDeployments: true,
    },
    thundercore_testnet: {
      url: "https://testnet-rpc.thundercore.com",
      chainId: 18,
      accounts: ACCOUNT,
      saveDeployments: true,
    },
    linea_testnet: {
      url: "https://rpc.goerli.linea.build",
      chainId: 59140,
      accounts: ACCOUNT,
      saveDeployments: true,
    },
    celo_testnet: {
      url: "https://alfajores-forno.celo-testnet.org",
      chainId: 44787,
      accounts: ACCOUNT,
      saveDeployments: true,
      verify: {
        etherscan: {
          apiKey: "8NH96QIJ4ZVR6SN7Z89EVA6JIE1JHY16NS",
        },
      },
    },
    polygon_zkvm_testnet: {
      url: "https://rpc.public.zkevm-test.net",
      chainId: 1442,
      accounts: ACCOUNT,
      saveDeployments: true,
      verify: {
        etherscan: {
          apiKey: "A5T3GR12B6PYJRGZUMUHAIFG656C9J85BG",
        },
      },
    },
    holesky: {
      url: "https://1rpc.io/holesky",
      chainId: 17000,
      accounts: ACCOUNT,
      saveDeployments: true,
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.26",
        settings: {
          optimizer: {
            enabled: true,
          },
        },
      },
    ],
  },
  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
    },
    treasury: {
      default: 1, // here this will by default take the second account as treasury
    },
  },
  etherscan: {
    apiKey: {
      taiko_testnet: "42069",
      scroll_testnet: "42069",
      mantle_testnet: "42069",
      linea_testnet: "42069",
      gnosis_testnet: "42069",
      celo_testnet: "8NH96QIJ4ZVR6SN7Z89EVA6JIE1JHY16NS",
      sepolia: "HRPUPRN4G9HKSBWFCCRW7I61C7HJPNKVGD",
      base_sepolia: "BEH7Y1KKMYDKNV4416SEV3EQ1PT9AWC4Y8",
      polygonMumbai: "5XUJHBNCVSF2J3F3W865U6ZYNTW2G7Z8WV",
      base_testnet: "BEH7Y1KKMYDKNV4416SEV3EQ1PT9AWC4Y8",
      arbitrum_testnet: "STF7WZSAWCWMECBKQAXMKA79XI8EMFE8CF",
      polygon_zkvm_testnet: "A5T3GR12B6PYJRGZUMUHAIFG656C9J85BG",
    },
    customChains: [
      {
        network: "taiko_testnet",
        chainId: 167005,
        urls: {
          apiURL: "https://explorer.test.taiko.xyz/api",
          browserURL: "https://explorer.test.taiko.xyz",
        },
      },
      {
        network: "scroll_testnet",
        chainId: 534351,
        urls: {
          apiURL: "https://sepolia-blockscout.scroll.io/api",
          browserURL: "https://sepolia-blockscout.scroll.io",
        },
      },
      {
        network: "linea_testnet",
        chainId: 59140,
        urls: {
          apiURL: "https://explorer.goerli.linea.build/api",
          browserURL: "https://explorer.goerli.linea.build",
        },
      },
      {
        network: "celo_testnet",
        chainId: 44787,
        urls: {
          apiURL: "https://api-alfajores.celoscan.io/api",
          browserURL: "https://alfajores.celoscan.io",
        },
      },
      {
        network: "mantle_testnet",
        chainId: 5001,
        urls: {
          apiURL: "https://explorer.testnet.mantle.xyz/api",
          browserURL: "https://explorer.testnet.mantle.xyz",
        },
      },
      {
        network: "base_goerli",
        chainId: 84531,
        urls: {
          apiURL: "https://api-goerli.basescan.org/api?",
          browserURL: "https://goerli.basescan.org/",
        },
      },
      {
        network: "base_sepolia",
        chainId: 84532,
        urls: {
          apiURL: "https://api-sepolia.basescan.org",
          browserURL: "https://sepolia.basescan.org/",
        },
      },
      {
        network: "arbitrum_testnet",
        chainId: 421614,
        urls: {
          apiURL: "https://api-sepolia.arbiscan.io/api",
          browserURL: "https://sepolia.arbiscan.io",
        },
      },
      {
        network: "gnosis_testnet",
        chainId: 10200,
        urls: {
          apiURL: "https://gnosis-chiado.blockscout.com/api",
          browserURL: "https://gnosis-chiado.blockscout.com",
        },
      },
      {
        network: "polygon_zkvm_testnet",
        chainId: 1442,
        urls: {
          apiURL: "https://api-testnet-zkevm.polygonscan.com/api",
          browserURL: "https://testnet-zkevm.polygonscan.com",
        },
      },
    ],
  },
  paths: {
    sources: "./src",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
    deploy: "./deploy",
    subgraph: "./subgraph", // Defaults to './subgraph'
  },
  mocha: {
    timeout: 2000000000,
  },
  typechain: {
    outDir: "typechain",
    target: "ethers-v6",
    alwaysGenerateOverloads: false, // should overloads with full signatures like deposit(uint256) be generated always, even if there are no overloads?
    externalArtifacts: ["externalArtifacts/*.json"], // optional array of glob patterns with external artifacts to process (for example external libs from node_modules)
    dontOverrideCompile: false, // defaults to false
  },
  gasReporter: {
    enabled: true,
    gasPrice: 100,
  },
};
