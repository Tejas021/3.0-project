//https://eth-ropsten.alchemyapi.io/v2/k4OCOh0J-TYGM-ScUNawmYRd7NBNX_xN


require("@nomiclabs/hardhat-waffle");

module.exports={
  solidity:"0.8.0",
  networks:{
    ropsten:{
      url:"https://eth-ropsten.alchemyapi.io/v2/k4OCOh0J-TYGM-ScUNawmYRd7NBNX_xN"
    ,accounts:[
      "17206c45e40f045fa0c1ed6e8bb66452d45c8692acdaa2b2b77883bc9a2a4fba"
    ]
    }
  }
}