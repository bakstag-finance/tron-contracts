var OtcMarket = artifacts.require("./OtcMarket.sol");


module.exports = function(deployer) {
  deployer.deploy(OtcMarket, 
    "0x92A8546CB4655764ABC005887CF5A2EEB7E1B583",
    "0x1b356f3030CE0c1eF9D3e1E250Bf0BB11D81b2d1", 
    "0x92A8546CB4655764ABC005887CF5A2EEB7E1B583"
  );
};
