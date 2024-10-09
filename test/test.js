// Import dependencies
const aOtcMarket = artifacts.require("OtcMarket");
const { assert } = require("chai");

contract("OtcMarket", (accounts) => {
  let otcMarketInstance;

  // Pre-defined constants
  const bEid = 1; // Example bEid, replace with your actual test data
  const GAS_CREATE_OFFER = 500000; // Replace with appropriate gas limit

  before(async () => {
    // Deploy the OTC Market contract instance
    otcMarketInstance = await aOtcMarket.deployed()
  });

  it("should set enforced options correctly", async () => {
    // Prepare the EnforcedOptionParam data
    const enforcedOptionsArray = [
      {
        // bEid parameter
        bEid: bEid,

        // OfferCreated message type, replace if needed
        messageType: 1,

        // OptionsBuilder configuration
        options: "0x0003010021010000000000000000000000000098968000000000000000000000000000e4e1c0"
      },
    ];

    // Call the function to set enforced options
    await otcMarketInstance.setEnforcedOptions(enforcedOptionsArray, {
      from: accounts[0],
    });

    // // Retrieve the stored enforced options and assert to check the values
    // const storedOptions = await otcMarketInstance.getEnforcedOptions(0); // Replace '0' with appropriate index or id
    // assert.equal(storedOptions.bEid, bEid, "bEid does not match");
    // assert.equal(storedOptions.messageType, 1, "Message type does not match");
    // assert.equal(
    //   storedOptions.options.executorLzReceiveOption.gasLimit,
    //   GAS_CREATE_OFFER,
    //   "Gas limit does not match"
    // );
    // assert.equal(
    //   storedOptions.options.executorOrderedExecutionOption,
    //   true,
    //   "Ordered execution option not set correctly"
    // );
  });
});