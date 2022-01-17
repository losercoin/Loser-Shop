require('dotenv').config();

const HDWalletProvider = require('truffle-hdwallet-provider-privkey');
const privateKeys = process.env.PRIVATE_KEYS || "";

module.exports = {

  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" //match any network id
    },
    testnet: {
      provider: () => new HDWalletProvider(privateKeys.split(','), `https://data-seed-prebsc-1-s2.binance.org:8545`),
      network_id: 97,
      confirmations: 10,
      networkCheckTimeout: 10000000,
      gas: 5500000, // Ropsten has a lower block limit than mainnet
      timeoutBlocks: 200,
      skipDryRun: true
    },
    bsc: {
      provider: () => new HDWalletProvider(privateKeys.split(','), `https://bsc-dataseed1.binance.org`),
      network_id: 56,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    timeout: 10000000
  },
  
  // Configure your compilers
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      },
      version: "^0.8.0" 
    }
  }
};