const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "b02a70c33ec140c693ad02d17115a712";
const mnemonic = "path receive bike truck infant object grab level jazz birth parrot velvet";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
        network_id: 4,       // rinkeby's id
        gas: 4500000,        // rinkeby has a lower block limit than mainnet
        gasPrice: 10000000000,
    },
  }
};