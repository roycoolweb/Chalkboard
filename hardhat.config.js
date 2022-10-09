require("@nomiclabs/hardhat-waffle");

require('dotenv').config()

module.exports = {
  solidity: "0.8.4",
  networks: {
    goreli : {
        url: process.env.POKT_API_URL,
        accounts: [process.env.PRIVATE_KEY],
    },
  },
};