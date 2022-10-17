// Transition to TypeScript
import { HardhatUserConfig } from "hardhat/types";
import "hardhat-deploy";
import "hardhat-deploy-ethers";
import "solidity-coverage";
import '@typechain/hardhat';
import "hardhat-gas-reporter";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    arbitrum: {
      url: process.env.ARBITRUM_RPC,
      accounts: [<string>process.env.ARBITRUM_TESTNET_PRIVKEY]
    }
  },
  gasReporter: {
    enabled: (process.env.REPORT_GAS) ? true : false,
    coinmarketcap: process.env.COINMARKET_CAP_KEY,
    currency: 'USD',
  },
  namedAccounts: {
    deplyer: 0, // our first address has name "deployer"
  },
};

export default config;
